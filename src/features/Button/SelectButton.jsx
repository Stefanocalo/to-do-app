import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionB } from "../../style";
import { setFilterTerm } from "../../app/todoSlice";

export const SelectButton = () => {

    const [filter, setFilter] = useState('all');

    const tags = useSelector(state => state.todo.tag);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilterTerm(filter));
    }, [filter])

    return(
        <SelectionB
        onChange={(e) => setFilter(e.target.value)}
        id='tag'>
            <option value='all'>All</option>
            {tags?.map((tag, index) => (
                <option key={index} value={`${tag.tag.toLowerCase()}`}>{tag.tag}</option>
            ))}
            
        </SelectionB>
    )
}