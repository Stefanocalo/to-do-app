import React, {useState} from "react";
import { ButtonP, OptionWrapper, ButtonAdd} from "../../style";
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";

export const TodoOptions = () => {

    const [form, setForm] = useState(false)

    return(
        <OptionWrapper>
            <ButtonP role='button'>Select All</ButtonP>
            <ButtonAdd role='button' onClick={() => setForm(true)}>+</ButtonAdd>
            <SelectButton />
            <TodoForm form={form} setForm={setForm}/>
        </OptionWrapper>
    )
}