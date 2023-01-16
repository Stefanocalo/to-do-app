import React, {useEffect, useState} from "react";

import { Close, Edit, theme, TagOption, TagForm, FormLabel, ButtonS, ButtonP} from "../../style";
import './Tag.css';


import {ImBin} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md'


export const Tag = ({tag}) => {

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        setTitle(tag.tag);
        setColor(tag.color);
    }, [])

    const height = edit? '17rem' : '4rem';


    return(
        <TagOption style={{height: height}} >

            {!edit && <>
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
            </div> </>}
            
            {edit && <TagForm >
                <div className="mainWrapper" >
                    <div 
                    onClick={() => setEdit(false)}
                    style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Close>X</Close>
                    </div>
                    <div className="spaceAround">
                        <div className="editWrapper">
                            <div className="lableWrapper">
                                <FormLabel htmlFor="title">Tag title:</FormLabel>
                                <input 
                                style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                                type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </div>
                            <div className="lableWrapper">
                                <FormLabel htmlFor="tag">Color:</FormLabel>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                    <select 
                                    style={{height: '2rem', borderRadius: '8px', fontSize: '1rem', padding: '0 1rem'}}
                                    name='color' value={color} onChange={(e) => setColor(e.target.value)}>
                                        <option value='blue'>Blue</option>
                                        <option value='yellow'>Yellow</option>
                                        <option value='orange'>Orange</option>
                                        <option value='red'>Red</option>
                                        <option value='purple'>Purple</option>
                                        <option value='pink'>Pink</option>
                                        <option value='green'>Green</option>
                                    </select>
                                    <div style={{height: '2rem', width: '2rem', borderRadius: '8px', border: `1px solid ${theme.colors.primary}`, backgroundColor: `${color}`, margin: '0.2rem', transition: '0.3s'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="editWrapper">
                            <div>
                                <ButtonP>Update</ButtonP>
                            </div>
                            <div>
                                <ButtonS>Cancel</ButtonS>
                            </div>
                        </div>
                    </div>
                </div>
            </TagForm>}
            
        </TagOption>
    )
}