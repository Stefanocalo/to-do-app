import React from "react";
import { SelectionB } from "../../style";

export const SelectButton = () => {

    return(
        <SelectionB
        id='status'>
            <option value='all'>All</option>
            <option value='completed'>Complete</option>
            <option value='Incomplete'>Incomplete</option>
        </SelectionB>
    )
}