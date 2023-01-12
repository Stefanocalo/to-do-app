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
       },
       removeTodo: (state, action) => {
        const localTodoList = window.localStorage.getItem('todolist');

        if(localTodoList) {
            const local = JSON.parse(localTodoList);
            const updatedTodo = local.filter((todo) => todo.id !== action.payload);
            window.localStorage.setItem('todolist', JSON.stringify(updatedTodo));
            state.todolist = updatedTodo;
        }
       },
       updateTodo: (state, action) => {
        const localTodoList = window.localStorage.getItem('todolist');
        if(localTodoList) {
            const local = JSON.parse(localTodoList);
            local.forEach(todo => {
                if(todo.id === action.payload.id) {
                    todo.status = action.payload.status;
                    todo.title = action.payload.title;
                };
            window.localStorage.setItem('todolist', JSON.stringify(local));
            state.todolist = local;
            });
        }
       }
        
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;