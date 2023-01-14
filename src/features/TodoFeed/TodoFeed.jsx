import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoFeedContainer } from "../../style";
import { Todo } from "../Todo/Todo";

import { ButtonS } from "../../style";

import { setFilterTerm } from "../../app/todoSlice";

export const TodoFeed = () => {

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);

    const [completedCount, setCompletedCount] = useState(0);
    const [incompleteCount, setIncompleteCont] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        todos?.map(todo => {
            if (filterTerm === 'all') {
                const completed = todos?.filter(todo => todo.status === 'complete').length;
                const incomplete = todos?.filter(todo => todo.status === 'incomplete').length;

                setCompletedCount(completed);
                setIncompleteCont(incomplete);
            } else if (filterTerm !== 'all'){
                const completed = todos?.filter(todo => todo.status === 'complete' && todo.tag?.toLowerCase() === filterTerm).length;
                const incomplete = todos?.filter(todo => todo.status === 'incomplete' && todo.tag?.toLowerCase() === filterTerm).length;
                setCompletedCount(completed);
                setIncompleteCont(incomplete);
            }
        })
    }, [todos, filterTerm])


    const renderFeed = () => {
        if(todos?.length === 0 || incompleteCount === 0) {
            return(
                <>
                    {filterTerm !== 'all' &&  
                        
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h3 style={{padding: '2rem 0'}}>Active filter: {`${filterTerm.charAt(0).toUpperCase() + filterTerm.slice(1)}`} </h3> 
                                <ButtonS onClick={() => dispatch(setFilterTerm('all'))} style={{minWidth: '3rem', height: '2.1rem', margin: '0 1rem'}}>clear</ButtonS>
                            </div>
                    }

                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({incompleteCount})</h2>
                    <p style={{margin: '4rem'}}>{filterTerm === 'all' ? 'Add a task to start.' : 'No completed tasks under this tag'}</p>
                    <h3 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({completedCount})</h3>
                    {todos?.map((todo, index) => {
                        if(completedCount > 0 && filterTerm === 'all') {
                            return  <Todo key={index} todo={todo} />
                        } else if(completedCount > 0 && filterTerm !== 'all') {
                           if(todo.tag.toLowerCase() === filterTerm) {
                                return(
                                   <Todo key={index} todo={todo} />
                                )
                           }
                        }
                    }
                       
                     )}
                    

                </>
            )
        } else if(todos?.length > 0 && filterTerm === 'all') {
            return(
                <>
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({incompleteCount})</h2>
                    {todos?.map((todo, index) => (
                     todo.status === 'incomplete' && <Todo key={index} todo={todo}/>
                    ))}
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({completedCount})</h2>
                    {todos?.map((todo, index) => (
                     todo.status === 'complete' && <Todo key={index} todo={todo} /> 
                 ))}
                </>
            )
        } else if(todos?.length > 0 && filterTerm !== 'all') {
            return(
                <>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h3 style={{padding: '2rem 0'}}>Active filter: {`${filterTerm.charAt(0).toUpperCase() + filterTerm.slice(1)}`} </h3>
                        <ButtonS onClick={() => dispatch(setFilterTerm('all'))} style={{minWidth: '3rem', height: '2.1rem', margin: '0 1rem'}}>clear</ButtonS>
                    </div>
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Tasks ({incompleteCount})</h2>
                    {todos?.map((todo, index) => (
                     (todo.status === 'incomplete' && filterTerm === todo.tag.toLowerCase()) && <Todo key={index} todo={todo}/>
                    ))}
                    <h2 style={{margin: '1rem 0', fontSize: '1.6rem'}}>Completed Tasks ({completedCount})</h2>
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