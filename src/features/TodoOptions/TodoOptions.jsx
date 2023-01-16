import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { ButtonP, OptionWrapper, ButtonAdd, Close} from "../../style";
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";
import {MdPostAdd} from 'react-icons/md';
import { useSelector } from "react-redux";
import { updateTodo } from "../../app/todoSlice";
import { SelectAllOption } from "../Button/SelectAllOption";

export const TodoOptions = () => {

    const [form, setForm] = useState(false);
    const [selectAllActive, setSelectAllActive] = useState(false);
    const [nSelected,setNSelected] = useState(0);

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);
    const dispatch = useDispatch();

    const handleSelectAll = () => {
        todos?.map(todo => {
            const actionPayload = todos?.filter(todo => todo.isSelected).length > 0 ? false : true;
            setSelectAllActive(!selectAllActive);
            if(filterTerm === 'all') {
                dispatch(updateTodo({
                    ...todo,
                    isSelected: actionPayload
                }))
            } else {
                if(todo.tag.toLowerCase() === filterTerm) {
                    dispatch(updateTodo({
                        ...todo,
                        isSelected: actionPayload
                    }))
                }
            }
        })
    };

    useEffect(() => {
        if(filterTerm === 'all') {
            const selected = todos?.filter(todo => todo.isSelected).length;
            setNSelected(selected);
        } else {
            const selected = todos?.filter(todo => todo.isSelected && todo.tag.toLowerCase() === filterTerm).length;
            setNSelected(selected);
        }
       
    },[todos])

    

    return(
        <OptionWrapper>
            <ButtonP role='button' onClick={() => handleSelectAll()}>{nSelected > 0 ? `${nSelected} selected X` : 'Select All'}</ButtonP>
            <ButtonAdd role='button' onClick={() => setForm(true)}><MdPostAdd fontSize='1.6rem'/></ButtonAdd>
            {todos?.filter(todo => todo.isSelected).length === 0 && <SelectButton />}
            {todos?.filter(todo => todo.isSelected).length > 0 && <SelectAllOption nSelected={nSelected}/>}
            <TodoForm form={form} setForm={setForm}/>
        </OptionWrapper>
    )
}