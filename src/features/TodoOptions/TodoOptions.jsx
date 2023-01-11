import React, {useState} from "react";
import { ButtonP, OptionWrapper} from "../../style";
import { Select } from "../Button/Select";
import { TodoForm } from "../TodoForm/TodoForm";

export const TodoOptions = () => {

    const [form, setForm] = useState('true')

    return(
        <OptionWrapper>
            <ButtonP>New Task</ButtonP>
            <Select></Select>
            <TodoForm />
            
        </OptionWrapper>
    )
}