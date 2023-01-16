import React, { useState } from "react";
import { Modal, SettingContainer, Close, Edit, SettingBar, IconsContainer, theme, SettingPage, TagOption} from "../../style";

import {AiOutlineTags} from 'react-icons/ai';
import {HiOutlineColorSwatch} from 'react-icons/hi';
import { useSelector } from "react-redux";


import { Tag } from "../Tag.jsx/Tag";




export const OptionGeneral = ({optionActive, setOptionActive }) => {

    const [themesTab, setThemesTab] = useState(false);
    const [tagTab, setTagTab] = useState(true);

    const tags = useSelector(state => state.todo.tag);

    const handleThemesClick = () => {
        if(!themesTab){
            setThemesTab(true);
            setTagTab(false);
        }  
    };

    const handleTagClick = () => {
        if (!tagTab) {
            setTagTab(true);
            setThemesTab(false);
        }
    }

    const renderTags = () => {
        tags?.map((tag, index) => {
            let color = tag.color;
            return(
                    <div style={{marginBottom: '6rem',height: '10rem', backgroundColor: 'black'}} key={index}>
                        <p>{tag.tag}</p>
                        <div style={{width: '2rem', height: '2rem', backgroundColor: color, borderRadius: '5px', border: `1px solid ${theme.colors.primary}`, margin: '0.3rem', transition: '0.3s'}}></div>
                    </div>

            )
        })
    }
    

    const top = optionActive ? 0 : 1000;
    const opacity = optionActive ? 1 : 0
    const colorTheme = themesTab ? theme.colors.buttonP : null;
    const positionTheme = themesTab ? 0 : '-100%';
    const colorTag = tagTab ? theme.colors.buttonP : null;
    const positionTag = tagTab ? 0 : '-100%';


    return(
        <Modal style={{opacity: opacity, top: top, alignItems: 'flex-end'}}>
           <SettingContainer>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Close onClick={() => setOptionActive(false)} >X</Close>
                </div>


                <SettingPage style={{right: positionTheme}}>
                   
                </SettingPage>


                <SettingPage style={{left: positionTag}}>
                    {renderTags()}
                    {tags?.map((tag, index) => (
                        <Tag tag={tag} key={index}/>
                    ))}
                </SettingPage>


                <SettingBar >
                    <IconsContainer  style={{color: colorTag}} role='button'  onClick={() => handleTagClick()}>
                        <AiOutlineTags  fontSize='1.6rem'/>
                        <p>Tags</p>
                    </IconsContainer>
                    <IconsContainer style={{color: colorTheme}}  role='button'  onClick={() => handleThemesClick() }>
                        <HiOutlineColorSwatch  fontSize='1.6rem'/>
                        <p>Themes</p>
                    </IconsContainer >
                    

                </SettingBar>
           </SettingContainer>
        </Modal>
    )
}

