import React, {useState} from "react";
import { ButtonP, OptionWrapper} from "../../style";
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";

export const TodoOptions = () => {

    const [form, setForm] = useState(false)

    return(
        <OptionWrapper>
            <ButtonP onClick={() => setForm(true)}>New Task</ButtonP>
            <SelectButton />
            <TodoForm form={form} setForm={setForm}/>
        </OptionWrapper>
    )
}