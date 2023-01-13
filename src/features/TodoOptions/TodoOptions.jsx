import React, {useState} from "react";
import { ButtonP, OptionWrapper, ButtonAdd} from "../../style";
import { SelectButton } from "../Button/SelectButton";
import { TodoForm } from "../TodoForm/TodoForm";

export const TodoOptions = () => {

    const [form, setForm] = useState(false)

    return(
        <OptionWrapper>
            <ButtonP>Select All</ButtonP>
            <ButtonAdd onClick={() => setForm(true)}>+</ButtonAdd>
            <SelectButton />
            <TodoForm form={form} setForm={setForm}/>
        </OptionWrapper>
    )
}