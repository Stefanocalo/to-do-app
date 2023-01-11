import React, {useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalContainer, Close, FormContainer, theme } from "../../style";
import {MdOutlineClose} from 'react-icons/md';

export const TodoForm = ({theme}) => {

    const todos = useSelector(state => state.todo.category);

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');

    return(
        <Modal>
            <ModalContainer>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%'}}>
                    <Close>
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>
                    <h1>Add Task</h1>
                    <form>
                        <label htmlFor="title">Title</label>
                        <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                    </form>
                </FormContainer>

            </ModalContainer>
            
        </Modal>
    )
}