import { createSlice } from "@reduxjs/toolkit";

const getTodoList = () => {
    const localTodoList = window.localStorage.getItem('todolist');
    if(localTodoList) {
        return JSON.parse(localTodoList);
    } else {
        window.localStorage.setItem('todolist', JSON.stringify([]))
    }
}

const getTag = () => {
    const localTaglist = window.localStorage.getItem('tag');
    if(localTaglist) {
        return JSON.parse(localTaglist);
    } else {
        window.localStorage.setItem('tag', JSON.stringify([]))
    }
};

const initialState = {
    todolist: getTodoList(), 
    tag: getTag()
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
       },
       addTag: (state, action) => {
        const localTodoList = window.localStorage.getItem('tag');
        if(localTodoList) {
            const local = JSON.parse(localTodoList);
            local.push({...action.payload});
            window.localStorage.setItem('tag', JSON.stringify(local));
            state.tag = local;
        } else {
            window.localStorage.setItem('tag', JSON.stringify(action.payload))
        }
       }
        
    }
});


export const {addTodo, removeTodo, updateTodo, addTag} = todoSlice.actions;
export default todoSlice.reducer;