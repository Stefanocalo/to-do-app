import { format } from "date-fns";
import React from "react";
import { TodoContainer, DetailContainer, Close, Edit } from "../../style";
import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md';
import { useDispatch } from "react-redux";
import { removeTodo } from "../../app/todoSlice";
import { toast } from "react-hot-toast";

export const Todo = ({todo}) => {

   const style = todo.status === 'complete' ? 'line-through' : 'none';

   const dispatch = useDispatch();

   const handleRemove = () => {
    console.log(`${todo.title} has been removed`)
    dispatch(removeTodo(todo.id));
    toast('Task removed succesfully', {
        icon: <ImBin style={{color: 'red'}} />
    });
   }

   const handleEdit = () => {
    console.log(`${todo.title} is being edited`);
   }

    return(
        <TodoContainer>
            <DetailContainer>
                []
                []
            </DetailContainer>
            <DetailContainer>
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
    )
}