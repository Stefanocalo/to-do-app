import React from "react";
import { useSelector } from "react-redux";
import { TodoFeedContainer } from "../../style";
import { Todo } from "../Todo/Todo";

export const TodoFeed = () => {

    const todos = useSelector(state => state.todo.todolist)


    return(
        <TodoFeedContainer>
            {todos?.map((todo, index) => (
                  <Todo key={index} todo={todo}/>
            ))}
        </TodoFeedContainer>
    )
}