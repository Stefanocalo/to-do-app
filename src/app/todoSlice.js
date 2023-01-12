import { createSlice } from "@reduxjs/toolkit";
import uuid4 from "uuid4";

const getTodoList = () => {
    const localTodoList = window.localStorage.getItem('todolist');
    if(localTodoList) {
        return JSON.parse(localTodoList);
    } else {
        window.localStorage.setItem('todolist', JSON.stringify([]))
    }
}

const initialState = {
    todolist: getTodoList(), 
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
       addTodo: (state, action) => {
        state.todolist.push(action.payload);
        const todolist = window.localStorage.getItem('todolist');
        if(todolist) {
            const todoListArr = JSON.parse(todolist);
            todoListArr.push({
                ...action.payload,
            });
            window.localStorage.setItem('todolist', JSON.stringify(todoListArr));
        } else {
            window.localStorage.setItem('todolist', JSON.stringify([action.payload]))
        }
       }
        
    }
});


export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;