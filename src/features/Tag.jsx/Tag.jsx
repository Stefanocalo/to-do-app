import React, {useState} from "react";

import { Close, Edit, theme, TagOption} from "../../style";
import { ModifyTag } from "../OptionGeneral/ModifyTag";


import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md'


export const Tag = ({tag}) => {

    const [edit, setEdit] = useState(false)

    return(
        <TagOption >
            <div style={{width: '2rem', height: '2rem', backgroundColor: `${tag.color}`, borderRadius: '5px', border: `1px solid ${theme.colors.primary}`, margin: '0.3rem', transition: '0.3s'}}></div>
            <p>{tag.tag}</p>
            <div style={{display:'flex', alignItems: 'center'}}>

                <Close 
                    role='button'>
                        <ImBin style={{fontSize: '1.3rem'}}/>
                </Close>
                <Edit 
                    onClick={() => setEdit(true)}
                    role='button' >
                    <MdModeEdit style={{fontSize: '1.3rem'}}/>
                </Edit>
            </div>
            <ModifyTag tag={tag} edit={edit} setEdit={setEdit} />
        </TagOption>
    )
}