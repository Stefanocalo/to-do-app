import React, {useEffect, useState} from "react"; 
import { useDispatch, useSelector } from "react-redux";


import { Modal, ModalContainer, Close, FormContainer, ButtonP, ButtonS, FormLabel } from "../../style";
import {MdOutlineClose} from 'react-icons/md';
import { removeTag, removeTodo, updateTodo } from "../../app/todoSlice";
import { toast } from "react-hot-toast";
import { ImBin } from "react-icons/im";

export const Warning  = ({tag, warning ,setWarning}) => {

    const [newTag, setNewTag] = useState();

    useEffect(() => {
        setNewTag(filteredTags[0]?.tag)
    }, [])

    const dispatch =  useDispatch();

    const tags = useSelector(state => state.todo.tag);
    const todos = useSelector(state => state.todo.todolist);
    const filteredTags = tags.filter(element => element.tag !== tag.tag);

    const scale = warning ? 1 : 0;

    const handleDelete = () => {
        const n = todos?.filter(todo => todo.tag === tag.tag).length;
        todos?.map(todo => {
            dispatch(removeTodo(todo.id));
        })
        dispatch(removeTag(tag.tagId));
        toast(`${tag.tag} and ${n} removed succesfully`, {
            icon: <ImBin style={{color: 'red'}} />
        });
        setWarning(false);

    };

    const handleMove = () => {
            const n = todos?.filter(todo => todo.tag === tag.tag).length;
            todos?.map(todo => {
                if(todo.tag === tag.tag) {
                    dispatch(updateTodo({
                        ...todo,
                        tag: newTag,
                    }))
                }
                dispatch(removeTag(tag.tagId));
            })
            setWarning(false);
            toast.success(`${tag.tag} deleted and ${n} task moved to ${newTag}`)
    };


    return(
        <Modal style={{ top: 0, scale:` ${scale}`, transition: '0.3s'}}>
            <ModalContainer style={{scale:` ${scale}`, transition: '0.3s'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%', height: '100%'}}>
                    <Close 
                    onClick={() => setWarning(false)}
                    role='button'
                    >
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '1rem'}}>
                        <h2 style={{margin: '1rem'}}>This tag contains {todos?.filter(todo => todo.tag === tag.tag).length} todo{todos?.filter(todo=>todo.tag === tag.tag).length > 1 && 's'}.</h2>
                        <h4 style={{margin: '1rem'}}>Please choose to move todos to a different tag or delete them.</h4>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <FormLabel style={{margin:'0 1rem'}}>Move to:</FormLabel>
                            <select 
                            style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                            value={newTag} onChange={(e) => setNewTag(e.target.value)}>
                                {filteredTags?.map((element, index) => <option key={index} >{element.tag}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '2rem'}}>
                        <ButtonP
                        onClick={() => handleMove()}
                        >Move</ButtonP>
                        <ButtonS
                        onClick={() => handleDelete()}
                        >Delete</ButtonS>
                    </div>
                </FormContainer>
            </ModalContainer>
        </Modal>
                 
    )
}