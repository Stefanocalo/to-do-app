import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../style";

export const TodoForm = () => {

    const todos = useSelector(state => state.todo.category);

    

    return(
        <Modal>
            
        </Modal>
    )
}