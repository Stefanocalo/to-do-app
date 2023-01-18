import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

//Style
import { SelectionB } from "../../style";

//Actions
import { updateTodo } from "../../app/todoSlice";

export const SelectAllOption = ({nSelected}) => {

    const [status, setStatus] = useState('setas');

    const todos = useSelector(state => state.todo.todolist);
    const filterTerm = useSelector(state => state.todo.filterTerm);
    const dispatch = useDispatch();


//Updating only filtered todos if filter is active
    useEffect(() => {
        todos?.map(todo => {
         if(todo.isSelected) {
            if(status !== 'setas'){
                if(filterTerm === 'all') {
                 todo.isSelected === true && dispatch(updateTodo({
                    ...todo,
                    status,
                    isSelected: false
                   }))
                } else if(filterTerm !== 'all' && todo.tag.toLowerCase() === filterTerm) {
                    todo.isSelected === true && dispatch(updateTodo({
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