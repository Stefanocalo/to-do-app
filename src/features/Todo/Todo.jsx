import { format } from "date-fns";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TodoContainer, DetailContainer, DataContainer } from "../../style";

export const Todo = ({todo}) => {

   const style = todo.status === 'complete' ? 'line-through' : 'none';

    return(
        <TodoContainer>
            <DetailContainer>
                []
                []
            </DetailContainer>
            <DataContainer>
                <p style={{ textDecorationLine: style, transition: '0.3s', fontSize: '1.3rem'}}>{todo.title}</p>
                <p style={{fontSize: '0.8rem'}}>{format(new Date(todo.date), 'p, dd/mm/yyyy') }</p>
            </DataContainer>
        </TodoContainer>
    )
}