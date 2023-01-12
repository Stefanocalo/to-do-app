import React, {useState} from "react";
import { useDispatch } from "react-redux";
//Dependencies
import { toast } from "react-hot-toast";
import { format } from "date-fns";
//Style
import { TodoContainer, DetailContainer, Close, Edit } from "../../style";
import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md';
//Actions
import { removeTodo } from "../../app/todoSlice";
//Components
import { TodoForm } from "../TodoForm/TodoForm";
import { CheckButton } from "../Button/CheckButton";

export const Todo = ({todo}) => {

    const [editForm, setEditForm] = useState(false);

   const style = todo.status === 'complete' ? 'line-through' : 'none';

   const dispatch = useDispatch();

   const handleRemove = () => {
    dispatch(removeTodo(todo.id));
    toast('Task removed succesfully', {
        icon: <ImBin style={{color: 'red'}} />
    });
   }

   const handleEdit = () => {
    setEditForm(true);
   }

   

    return(
        <>
        <TodoContainer>
            <DetailContainer>
                <CheckButton todo={todo}/>
            </DetailContainer>
            <DetailContainer style={{textAlign: 'left', width: '80%'}}>
                <p style={{ textDecorationLine: style, transition: '0.3s', fontSize: '1.3rem'}}>{todo.title}</p>
                <p style={{fontSize: '0.8rem'}}>{format(new Date(todo.date), 'p, dd/mm/yyyy') }</p>
            </DetailContainer>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
                <Close 
                onClick={() => handleRemove()}
                role='button'>
                    <ImBin style={{fontSize: '1.3rem'}}/>
                </Close>
                <Edit 
                onClick={() => handleEdit()}
                role='button' >
                    <MdModeEdit style={{fontSize: '1.3rem'}}/>
                </Edit>
            </div>
        </TodoContainer>
        <TodoForm type='update' setEditForm={setEditForm} editForm={editForm} todo={todo}/>
        </>
    )
}