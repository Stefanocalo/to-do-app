import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

//Style
import { ButtonP, OptionWrapper, ButtonAdd, OptionContainer} from "../../style";
import {MdPostAdd} from 'react-icons/md';
import {FiSettings} from 'react-icons/fi';

//Components
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";
import { SelectAllOption } from "../Button/SelectAllOption";
import { OptionGeneral } from "../OptionGeneral/OptionGeneral";

//Actions
import { updateTodo } from "../../app/todoSlice";

export const TodoOptions = () => {

    const [form, setForm] = useState(false);
    const [selectAllActive, setSelectAllActive] = useState(false);
    const [nSelected,setNSelected] = useState(0);
    const [optionActive, setOptionActive] = useState(false);

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);
    const dispatch = useDispatch();


//Event handler
    const handleSelectAll = () => {
        todos?.map(todo => {
            const actionPayload = todos?.filter(todo => todo.isSelected).length > 0 ? false : true;
            setSelectAllActive(!selectAllActive);
            if(filterTerm === 'all') {
                dispatch(updateTodo({
                    ...todo,
                    isSelected: actionPayload
                }))
            } else if(filterTerm !== 'all'){
                if(todo.tag.toLowerCase() === filterTerm) {
                    dispatch(updateTodo({
                        ...todo,
                        isSelected: actionPayload
                    }))
                }
            } else {
                return
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
            <OptionContainer role='button' onClick={() => setOptionActive(true)} >
                <FiSettings />
            </OptionContainer >
            <OptionGeneral optionActive={optionActive} setOptionActive={setOptionActive} />
        </OptionWrapper>
    )
}