import React, {useState} from "react";
import { ButtonP, OptionWrapper, ButtonAdd} from "../../style";
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";
import {MdPostAdd} from 'react-icons/md';

export const TodoOptions = () => {

    const [form, setForm] = useState(false)

    return(
        <OptionWrapper>
            <ButtonP role='button'>Select All</ButtonP>
            <ButtonAdd role='button' onClick={() => setForm(true)}><MdPostAdd fontSize='1.6rem'/></ButtonAdd>
            <SelectButton />
            <TodoForm form={form} setForm={setForm}/>
        </OptionWrapper>
    )
}