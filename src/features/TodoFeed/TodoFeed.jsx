import React from "react";
import { useSelector } from "react-redux";
import { TodoFeedContainer } from "../../style";
import { Todo } from "../Todo/Todo";

export const TodoFeed = () => {

    const todos = useSelector(state => state.todo.todolist)

    let x = 0; 
    let z = 0;

    const getCompleted = () => {
        todos?.map(todo => {
            (todo.status === 'complete') && (x += 1);
            return x;
        })
    };
    const getIncomplete = () => {
        todos?.map(todo => {
            (todo.status === 'incomplete') && (z =+ 1);
            return z;
        })
    };
    getCompleted()
    getIncomplete()


    return(
        <TodoFeedContainer>

            {
                todos?.length > 0 && (<>
                 <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({z})</h2>
                 {todos?.map((todo, index) => (
                     todo.status === 'incomplete' && <Todo key={index} todo={todo}/>
                 ))}
                 <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({x})</h2>
                 {todos?.map((todo, index) => (
                     todo.status === 'complete' && <Todo key={index} todo={todo} /> 
                 ))}
                </>)
            }
            {
                todos.length === 0 && (
                    <>
                    <h2>No Tasks</h2>
                    </>
                )
            }
               
            

        </TodoFeedContainer>
    )
}