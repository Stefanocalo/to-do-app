import React, {useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, addTag, updateTag } from "../../app/todoSlice";
import uuid4 from "uuid4";
import format from "date-fns/format";
import { toast } from "react-hot-toast";

// Style
import { Modal, ModalContainer, Close, FormContainer, TaskForm, FormLabel, ButtonP, NewTag,CancelNewTag, ButtonS, theme } from "../../style";
import {MdOutlineClose} from 'react-icons/md';


export const TodoForm = ({type, form, setForm, setEditForm, editForm, todo}) => {

    const todos = useSelector(state => state.todo.todolist);
    const tags = useSelector(state => state.todo.tag);

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    const [tag, setTag] = useState('Main');
    const [addNew, setAddNew] = useState(false);
    const [edit, setEdit] = useState(false);
    const [color, setColor] = useState('blue');


    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'update' && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
            setTag(todo.tag);
            setAddNew(false);
            tags.map((tag) => {
                if(tag.tag === todo.tag) {
                    setColor(tag.color);
                }
            })
        }
        if(type !== 'update') {
            tags.map((element) => {
                if(element.tag === tag) {
                   setColor(element.color);
                }
            })
        }
       
    }, [todo, type]);



    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.length > 0 && status && tag.length > 0) {
        if(type === 'update') { 
            let currentId;
            let currentTag;
            tags.forEach(tag => {
                if(tag.tag === todo.tag) {
                    currentId = tag.tagId;
                    currentTag = tag.tag;
                }
            })
            if(edit) {
                dispatch(updateTag({
                    tagId: currentId,
                    color: color,
                    tag: tag
                }))
                dispatch(updateTodo({
                    ...todo,
                    title,
                    tag,
                    status,
                }))
                todos.forEach(todo => {
                    if(todo.tag === currentTag) {
                        dispatch(updateTodo({
                            ...todo,
                            tag,
                        }))
                    }
                })
                setEdit(false);
                setEditForm(false);
                toast.success('Task and tag updated succesfully!');

            }
            if(addNew) {
                if (tags?.filter((element) => element.tag === tag).length === 0) {
                    dispatch(addTag({
                        tag,
                        tagId: uuid4(),
                        color
                    }))
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        tag,
                        status,
                    }))
                } else {
                    toast.error('exist');
                }
            }
            if(type === 'update' && !edit && !addNew) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    tag,
                    status,
                }))
                toast.success('Task updated correcty')
            }
            setAddNew(false);
            setEditForm(false);
        } else {
            if(addNew) {
                if (tags?.filter((element) => element.tag === tag).length === 0) {
                    dispatch(addTag({
                        tag,
                        tagId: uuid4(),
                        color
                    }))
                    toast.success(`New tag '${tag}' added succesfully!`);
                    dispatch(addTodo({
                        id: uuid4(),
                        title,
                        status,
                        tag,
                        date: format(new Date(), 'p, dd/MM/yyyy'),
                    }))
                        setForm(false);
                        setTitle('');
                        setStatus('incomplete');
                        setAddNew(false);
                } else {
                    toast.error(`'${tag}' already exist. Choose a different tag name.`);
                }
                
            } else {
                dispatch(addTodo({
                    id: uuid4(),
                    title,
                    status,
                    tag,
                    date: format(new Date(), 'p, dd/MM/yyyy'),
                }))

                if(!addNew && tags.length === 0) {
                    dispatch(addTag({
                        tag,
                        tagId: uuid4(),
                        color,
                    }))
                    
                } 

                  setForm(false);
                  setTitle('');
                  setStatus('incomplete');
                  setAddNew(false);
                  toast.success('Task added succesfully!');
            }            
        }       
       } else if (title.length === 0){
        toast.error('Please specify a title for your task.')
       } else if (tag.length === 0) {
        toast.error('Please specify a title for the tag.')
       }

    }

    const handleCancel = () => {
        type === 'update' ? setEditForm(false) : setForm(false);
        if(type !== 'update') {
            setTitle('');
            setStatus('incomplete');
            setTag('Main');
            setAddNew(false);
        } else {
            setEdit(false);
        }
    }

    const top = form || editForm ? 0 : 1000;
    const scale = form || editForm ? 1 : 0;


    return(
        <Modal style={{ top: top, scale:` ${scale}`}}>
            <ModalContainer style={{scale:` ${scale}`}}>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%', height: '100%'}}>
                    <Close 
                    role='button'
                    onClick={() => handleCancel()}>
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>
                    <h2 style={{marginBottom: '1rem'}}>{type === 'update' ? 'Update Task' : 'Add Task' }</h2>
                    <TaskForm
                    onSubmit={handleSubmit}
                    >
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <input 
                        style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                        type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} ></input>
                        <FormLabel htmlFor="status">Status</FormLabel>
                        <select 
                        style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                            <option value='incomplete'>Incomplete</option>
                            <option value='complete'>Complete</option>
                        </select>

                        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0'}}>
                            <FormLabel htmlFor="tag">Tag:</FormLabel>
                            {(!addNew && !edit) && (<>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <select 
                            style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                            name="tag"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}>
                                {tags?.length === 0 && <><option>{tag}</option></>}
                                {tags?.map((element, index) => <option key={index}>{element.tag}</option>)}
                            </select>
                            <div style={{width: '2rem', height: '2rem', backgroundColor: color, borderRadius: '5px', border: `1px solid ${theme.colors.primary}`, margin: '0.3rem', transition: '0.3s'}}></div>
                            </div>
                            
                            {type === 'update' && (<NewTag
                             type="button"
                             onClick={() => setEdit(!edit)}
                             >Edit tag</NewTag>)}
                             <NewTag
                             type="button"
                             onClick={() => setAddNew(!addNew)}
                             >Add new tag</NewTag>
                             </>
                            )}
                            {(addNew || edit) && (<>
                            <input 
                                type='text' value={tag} onChange={(e) => setTag(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                            >
                            </input>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <select 
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                                name='color' value={color} onChange={(e) => setColor(e.target.value)}>
                                    <option value='blue'>Blue</option>
                                    <option value='yellow'>Yellow</option>
                                    <option value='orange'>Orange</option>
                                    <option value='red'>Red</option>
                                    <option value='purple'>Purple</option>
                                    <option value='pink'>Pink</option>
                                    <option value='green'>Green</option>
                                </select>
                                <div style={{height: '2rem', width: '2rem', borderRadius: '8px', border: `1px solid ${theme.colors.primary}`, backgroundColor: color, margin: '0.2rem', transition: '0.3s'}}/>
                            </div>

                            {edit && (<CancelNewTag type='button' onClick={() => setEdit(false)}>
                                Back
                            </CancelNewTag>)}

                            {addNew && (<CancelNewTag type='button' onClick={() => setAddNew(false)}>
                                Back
                            </CancelNewTag>)}
                            </>)}
                        </div>


                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0'}}>
                            <ButtonP
                            type="submit"
                            >{type === 'update' ? 'Update Task': 'Add Task'}</ButtonP>
                            <ButtonS
                            type='button'
                            onClick={() => handleCancel()}
                            >Cancel</ButtonS>
                        </div>
                    </TaskForm>
                </FormContainer>
            </ModalContainer>
        </Modal>
    )
}