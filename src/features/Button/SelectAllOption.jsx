import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionB } from "../../style";
import { updateTodo } from "../../app/todoSlice";
import { toast } from "react-hot-toast";

export const SelectAllOption = ({nSelected}) => {

    const [status, setStatus] = useState('setas');

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        todos?.map(todo => {
         if(todo.isSelected) {
            if(status !== 'setas'){
                if(filterTerm === 'all') {
                   dispatch(updateTodo({
                    ...todo,
                    status,
                    isSelected: false
                   }))
                } else if(todo.tag.toLowerCase() === filterTerm) {
                    dispatch(updateTodo({
                        ...todo,
                        status,
                        isSelected: false
                    }))
                }
            }
        }
        })
        status !== 'setas' && toast.success(`${nSelected} tasks updated succesfully!`)
     }, [status])
 
    

    return(
        <SelectionB
        onChange={(e) => setStatus(e.target.value)}
        id='tag'
        value={status}>
            <option value='setas'>Set as</option>
            <option value='incomplete'>Incomplete</option>
            <option value='complete'>Complete</option>
        </SelectionB>
    )
}