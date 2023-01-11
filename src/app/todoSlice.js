import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";

const getTodoList = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if(localTodoList) {
        return JSON.parse(localTodoList);
    } else {
        window.localStorage.setItem('todoList', JSON.stringify([]))
    }
}

const initialState = {
    todoList: getTodoList(), 
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
       addTodo: (state, action) => {
        state.todoList.push(action.payload);
        const todolist = window.localStorage.getItem('todolist');
        if(todolist) {
            const todoListArr = JSON.parse(todolist);
            todoListArr.push({
                ...action.payload,
            });
            window.localStorage.setItem('todolist', JSON.stringify(todoListArr));
        } else {
            window.localStorage.setItem('todolist', JSON.stringify([...action.payload]))
        }
       }
        
    }
});


export const {addTodo, removeTodo, setTheme} = todoSlice.actions;
export default todoSlice.reducer;