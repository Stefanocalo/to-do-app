import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
//Dependencies
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { useSpring, animated, config } from '@react-spring/web'
import { useDrag } from "@use-gesture/react";
//Style
import { TodoContainer, DetailContainer, Close, Edit, theme } from "../../style";
import './Todo.css';
import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md';
//Actions
import { removeTodo, updateTodo } from "../../app/todoSlice";
//Components
import { TodoForm } from "../TodoForm/TodoForm";
import { CheckButton } from "../Button/CheckButton";

export const Todo = ({todo}) => {

    const [editForm, setEditForm] = useState(false);
    const [status, setStatus] = useState('incomplete');

   const style = todo.status === 'complete' ? 'line-through' : 'none';

   const dispatch = useDispatch();

   useEffect(() => {
    todo.status === 'complete' && setStatus('incomplete');
    todo.status === 'incomplete' && setStatus('complete');
   }, [todo.status])

   // Action handlers

   const handleRemove = () => {
    dispatch(removeTodo(todo.id));
    toast('Task removed succesfully', {
        icon: <ImBin style={{color: 'red'}} />
    });
   }


   const handleClick = () => {
    dispatch(updateTodo({
        ...todo,
        status
    }))
    toast.success('Task updated correctly!')
}

   const handleEdit = () => {
    setEditForm(true);
   }

   const [{ x}, api] = useSpring(() => ({ x: 0}));

   
  // Set the drag hook and define component movement based on gesture data

  let stopLimit = 400; 

  const bind = useDrag(
    ({ down, offset: [ox] }) =>
        api.start({
           x: down ? ox : (ox >= 150) && 100 || ox < 150 && 0,
           immediate: down, 
           config: { duration: 700 },
           config: config.wobbly 
          }),
        { from: () => [x.get(), 0],
        bounds: { left: -20, right: 190}
    }
  )

    const color = theme.colors.primary

    return(
        <div className="toDoWrapper">
            <animated.div 
            className= 'action' 
            role='button' 
            style={{width: x, backgroundColor: theme.colors.buttonP}}
            onClick={() => handleClick()}
            >
                <p style={{marginLeft: '1rem', fontWeight: 600, color: theme.colors.primary}}>{todo.status === 'incomplete' ? 'Complete' : 'Undo'}</p>
            </animated.div>
            <animated.div
            style={{x, backgroundColor: color}}
            className='todoContainer' {...bind()}>
                <DetailContainer>
                    <CheckButton todo={todo}/>
                </DetailContainer>
                <DetailContainer style={{textAlign: 'left', width: '80%'}}>
                    <p style={{ textDecorationLine: style, transition: '0.3s', fontSize: '1.3rem'}}>{todo.title}</p>
                    <p style={{fontSize: '0.8rem'}}>{todo.date}</p>
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
            </animated.div>
            <TodoForm type='update' setEditForm={setEditForm} editForm={editForm} todo={todo}/>
        </div>
    )
}