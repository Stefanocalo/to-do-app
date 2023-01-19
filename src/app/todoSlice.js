import { createSlice } from "@reduxjs/toolkit";

//Checking local storage befre initializzation.
//If no data present --> create


export const getTodoList = () => {
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
        window.localStorage.setItem('tag', JSON.stringify([{tag: 'Main', color: 'blue', tagId: '9351df0a-5257-4da5-a27d-c9d0edfffe78'
    }]))
    }
};

const getTheme = () => {
    const localTheme = window.localStorage.getItem('theme');
    if(localTheme) {
        return JSON.parse(localTheme);
    } else {
        window.localStorage.setItem('theme', JSON.stringify('lightBlue'));
    }
}

//Initial state
const initialState = {
    todolist: getTodoList(), 
    tag: getTag(),
    filterTerm: '',
    theme: getTheme(),
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
                    todo.tag = action.payload.tag;
                    todo.isSelected = action.payload.isSelected;
                };
            window.localStorage.setItem('todolist', JSON.stringify(local));
            state.todolist = local;
            });
        }
       },
       addTag: (state, action) => {
        const localTag = window.localStorage.getItem('tag');
        if(localTag) {
            const local = JSON.parse(localTag);
            local.push({...action.payload});
            window.localStorage.setItem('tag', JSON.stringify(local));
            state.tag = local;
        } else {
            window.localStorage.setItem('tag', JSON.stringify(action.payload))
        }
       },
       updateTag: (state, action) => {
        const localTag = window.localStorage.getItem('tag');
        if(localTag) {
            const local = JSON.parse(localTag);
            local.forEach((element) => {
                if(element.tagId === action.payload.tagId) {
                    element.color = action.payload.color;
                    element.tag = action.payload.tag;
                }
            });
            window.localStorage.setItem('tag', JSON.stringify(local));
            state.tag = local;
        }
       },
       removeTag: (state, action) => {
        const localTag = window.localStorage.getItem('tag');
        if(localTag) {
            const local = JSON.parse(localTag);
            const updatedTag = local.filter(tag => tag.tagId !== action.payload);
            window.localStorage.setItem('tag', JSON.stringify(updatedTag));
            state.tag = updatedTag;
        }
       },
       setTheme: (state, action) => {
        const theme = window.localStorage.getItem('theme');
        if(theme) {
            window.localStorage.setItem('theme', JSON.stringify(action.payload));
            state.theme = action.payload;
        }
       },
       setFilterTerm: (state, action) => {
        state.filterTerm = action.payload;
       }
    }
});



export const {addTodo,
    removeTodo,
    updateTodo,
    addTag,
    updateTag,
    setFilterTerm,
    removeTag,
    setTheme
} = todoSlice.actions;
export default todoSlice.reducer;