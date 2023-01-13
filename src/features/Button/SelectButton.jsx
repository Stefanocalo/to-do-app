import React, {useState} from "react";
import { useSelector } from "react-redux";
import { SelectionB } from "../../style";

export const SelectButton = () => {

    const [filter, setFilter] = useState('all');

    const tags = useSelector(state => state.todo.tag);

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