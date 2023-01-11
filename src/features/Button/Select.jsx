import React from "react";
import { Selection } from "../../style";

export const Select = () => {

    return(
        <Selection id='status'>
            <option value='all'>All</option>
            <option value='completed'>Complete</option>
            <option value='Incomplete'>Incomplete</option>
        </Selection>
    )
}