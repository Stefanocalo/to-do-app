import React, {useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, addTag } from "../../app/todoSlice";
import uuid4 from "uuid4";
import format from "date-fns/format";
import { toast } from "react-hot-toast";

// Style
import { Modal, ModalContainer, Close, FormContainer, TaskForm, FormLabel, ButtonP, NewTag,CancelNewTag, ButtonS, theme } from "../../style";
import {MdOutlineClose} from 'react-icons/md';

//react-icons
import {IoIosColorPalette} from 'react-icons/io';

export const TodoForm = ({type, form, setForm, setEditForm, editForm, todo}) => {

    const todos = useSelector(state => state.todo.category);

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    const [tag, setTag] = useState('Main');
    const [addNew, setAddNew] = useState(false);
    const [color, setColor] = useState('blue');

    const tags = useSelector(state => state.todo.tag);

    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'update' && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
            setTag(todo.tag);
            setAddNew(false);
            setColor('blue');
        }
    }, [todo])

    const handleSubmit = (e) => {
        e.preventDefault();

       if(title.length > 0 && status && tag) {
        if(type === 'update') { 
            dispatch(updateTodo({
                ...todo,
                title,
                status,
                tag,
            }))
            toast.success('Task updated succesfully!');
            setEditForm(false);
        } else {
            dispatch(addTodo({
                id: uuid4(),
                title,
                status,
                tag,
                date: format(new Date(), 'p, dd/MM/yyyy')
            }))
            // Add tag if not already in the state
            if (tags?.filter((element) => element.tag === tag).length === 0) {
                dispatch(addTag({
                    tag,
                    tagId: uuid4(),
                    color
                }))
            }
               
            
            //Show success toast and set all the variable to initial state;
            toast.success('Task added succesfully!');
            setForm(false);
        }

        setTitle('');
        setStatus('incomplete');
        setTag('Main');
        setAddNew(false);
        setColor('blue');
       } else if (title.length === 0 && status){
        toast.error('Please specify a title for your task.')
       }
    }

    const handleCancel = () => {
        type === 'update' ? setEditForm(false) : setForm(false);
        setTitle('');
        setStatus('incomplete');
        setTag('Main');
        setAddNew(false);
        setColor('blue');
    }

    const top = form || editForm ? 0 : 1000;
    const scale = form || editForm ? 1 : 0;


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
                    <h2 style={{marginBottom: '1rem'}}>{type === 'update' ? 'Update' : 'Add Task' }</h2>
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

                        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0'}}>
                            <FormLabel htmlFor="tag">Tag:</FormLabel>
                            {!addNew && (<><select 
                            style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                            name="tag"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}>
                                {tags.length === 0 && <option>{tag}</option>}
                                {tags.map((element, index) => <option key={index}>{element.tag}</option>)}
                            </select>
                             <NewTag
                             type="button"
                             onClick={() => setAddNew(!addNew)}
                             >Add new</NewTag>
                             </>
                            )}
                            {addNew && (<>
                            <input 
                                type='text' value={tag} onChange={(e) => setTag(e.target.value)}
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                            >
                            </input>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <select 
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                                name='color' value={color} onChange={(e) => setColor(e.target.value)}>
                                    <option value='blue'>Blue</option>
                                    <option value='yellow'>Yellow</option>
                                    <option value='orange'>Orange</option>
                                    <option value='red'>Red</option>
                                    <option value='purple'>Purple</option>
                                    <option value='pink'>Pink</option>
                                    <option value='green'>Green</option>
                                </select>
                                <div style={{height: '2rem', width: '2rem', borderRadius: '8px', border: `1px solid ${theme.colors.primary}`, backgroundColor: color, margin: '0.2rem', transition: '0.3s'}}/>
                            </div>

                            <CancelNewTag type='button' onClick={() => setAddNew(false)}>
                                Back
                            </CancelNewTag>
                            </>)}
                        </div>


                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0'}}>
                            <ButtonP
                            type="submit"
                            >{type === 'update' ? 'Update Task': 'Add Task'}</ButtonP>
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