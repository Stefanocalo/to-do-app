import { useForceUpdate } from "@react-spring/shared";
import React from "react";
import { useSelector } from "react-redux";
import { TodoFeedContainer } from "../../style";
import { Todo } from "../Todo/Todo";

export const TodoFeed = () => {

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);

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
            (todo.status === 'incomplete') && (z += 1);
            return z;
        })
    };
    getCompleted()
    getIncomplete()

    const renderFeed = () => {
        if(todos?.length === 0) {
            return(
                <>
                    <h2>No tasks</h2>
                    <p>Added tasks will be here</p>
                </>
            )
        } else if(todos?.length > 0 && filterTerm === 'all') {
            return(
                <>
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({z})</h2>
                    {todos?.map((todo, index) => (
                     todo.status === 'incomplete' && <Todo key={index} todo={todo}/>
                    ))}
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({x})</h2>
                    {todos?.map((todo, index) => (
                     todo.status === 'complete' && <Todo key={index} todo={todo} /> 
                 ))}
                </>
            )
        } else if(todos?.length > 0 && filterTerm !== 'all') {
            return(
                <>
                     <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({z})</h2>
                    {todos?.map((todo, index) => (
                     (todo.status === 'incomplete' && filterTerm === todo.tag.toLowerCase()) && <Todo key={index} todo={todo}/>
                    ))}
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({x})</h2>
                    {todos?.map((todo, index) => (
                     (todo.status === 'complete' && filterTerm === todo.tag.toLowerCase()) && <Todo key={index} todo={todo} /> 
                 ))}
                </>
            )
        }
    }


    return(
        <TodoFeedContainer>
            {renderFeed()}
        </TodoFeedContainer>
    )
}