import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../app/todoSlice";
import uuid4 from "uuid4";


// Style
import { Modal, ModalContainer, Close, FormContainer, TaskForm, FormLabel, ButtonP } from "../../style";
import {MdOutlineClose} from 'react-icons/md';
import { ButtonS } from "../../style";
import { toast } from "react-hot-toast";

export const TodoForm = ({form, setForm}) => {

    const todos = useSelector(state => state.todo.category);

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
       if(title.length > 0 && status) {
        dispatch(addTodo({
            id: uuid4(),
            title,
            status,
            date: new Date().toLocaleString(),
        }))

        //Show success toast and set all the variable to initial state;
        toast.success('Task added succesfully!');

        setTitle('');
        setStatus('incomplete');
        setForm(false);
       } else if (title.length === 0 && status){
        toast.error('Please specify a title for your task.')
       }
    }

    const handleCancel = () => {
        setForm(false);
        setTitle('');
        setStatus('incomplete');
    }

    const top = form ? 0 : 1000;
    const blur = form ? 0.5 : 0;
    const scale = form ? 1 : 0;

    return(
        <Modal style={{ top: top, scale:` ${scale}`}}>
            <ModalContainer style={{scale:` ${scale}`}}>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%', height: '100%'}}>
                    <Close 
                    role='button'
                    onClick={() => handleCancel()}>
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>
                    <h2 style={{marginBottom: '1rem'}}>Add Task</h2>
                    <TaskForm
                    onSubmit={handleSubmit}
                    >
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <input 
                        style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                        type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                        <FormLabel htmlFor="status">Status</FormLabel>
                        <select 
                        style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                            <option value='incomplete'>Incomplete</option>
                            <option value='complete'>Complete</option>
                        </select>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0'}}>
                            <ButtonP
                            type="submit"
                            >Add Task</ButtonP>
                            <ButtonS
                            type='button'
                            onClick={() => handleCancel()}
                            >Cancel</ButtonS>
                        </div>
                    </TaskForm>
                </FormContainer>
            </ModalContainer>
        </Modal>
    )
}