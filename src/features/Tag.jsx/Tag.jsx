import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateTag, addTag, updateTodo, removeTag } from "../../app/todoSlice";


import { Close, Edit, theme, TagOption, TagForm, FormLabel, ButtonS, ButtonP} from "../../style";
import './Tag.css';


import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md'
import { toast } from "react-hot-toast";


export const Tag = ({tag}) => {

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todo.todolist);

    useEffect(() => {
        setTitle(tag.tag);
        setColor(tag.color);
    }, [])


//Submit handler

    const handleSubmit = (e) => {
        e.preventDefault();
    //Checking if anything has changed
        if(color !== tag.color || title !== tag.tag) {
        //Checking if there is any todo with the same tag to update
            if(todos?.filter(todo => todo.tag === tag.tag).length > 0) {
                todos?.map(todo => {
                    if(todo.tag === tag.tag) {
                //if so update tag and todos with the tag
                        dispatch(updateTodo({
                            ...todo,
                            tag: title
                        }));
                        dispatch(updateTag({
                            ...tag,
                            color,
                            tag: title,
                        }));
                    } else {
                        return
                    }
                })
        //If no todo with the tag we just update the tag
            } else {
                dispatch(updateTag({
                    ...tag,
                    color,
                    tag: title,
                }))
            };
        //Closing the edit menu and displaying the success message
            
            setEdit(false);
            toast.success(`${tag.tag} updated correctly!`);
        } else {
    //If no changes made we do not dispatch actions
            toast.success('No changes were made.');
            setEdit(false);
        }
    };


//Edit handler

    const handleCancel = () => {
        setEdit(false);
        setTitle(tag.tag);
        setColor(tag.color);
    };

//Delete handler

    const handleDelete = () => {

        if(todos?.filter(todo => todo.tag === tag.tag).length > 0) {
            console.log('there are');
        } else {
            console.log('there are not');
        }
        toast(`${tag.tag} removed succesfully`, {
            icon: <ImBin style={{color: 'red'}} />
        });
    }

    const height = edit? '17rem' : '4rem';


    return(
        <TagOption style={{height: height}} >

            {!edit && <>
            <div style={{width: '2rem', height: '2rem', backgroundColor: `${tag.color}`, borderRadius: '5px', border: `1px solid ${theme.colors.primary}`, margin: '1rem', transition: '0.3s'}}></div>
            <p>{tag.tag}</p>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-around'}}>

                <Close 
                    onClick={() => handleDelete()}
                    role='button'>
                        <ImBin style={{fontSize: '1.3rem'}}/>
                </Close>
                <Edit 
                    onClick={() => setEdit(true)}
                    role='button' >
                    <MdModeEdit style={{fontSize: '1.3rem'}}/>
                </Edit>
            </div> </>}
            
            {edit && <TagForm onSubmit={handleSubmit} >
                <div className="mainWrapper" >
                    <div 
                    onClick={() => handleCancel()}
                    style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Close>X</Close>
                    </div>
                    <div className="spaceAround">
                        <div className="editWrapper">
                            <div className="lableWrapper">
                                <FormLabel htmlFor="title">Tag title:</FormLabel>
                                <input 
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                                type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </div>
                            <div className="lableWrapper">
                                <FormLabel htmlFor="tag">Color:</FormLabel>
                                <div style={{display:'flex', alignItems: 'center'}}>
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
                                    <div style={{height: '2rem', width: '2rem', borderRadius: '8px', border: `1px solid ${theme.colors.primary}`, backgroundColor: `${color}`, margin: '0.2rem', transition: '0.3s'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="editWrapper">
                            <div>
                                <ButtonP
                                type="submit"
                                >Update</ButtonP>
                            </div>
                            <div>
                                <ButtonS 
                                onClick={() => handleCancel()}
                                type='button'>Cancel</ButtonS>
                            </div>
                        </div>
                    </div>
                </div>
            </TagForm>}
            
        </TagOption>
    )
}