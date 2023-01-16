import React, { useState } from "react";
import { Modal, SettingContainer, Close, SettingBar, IconsContainer, theme, SettingPage} from "../../style";

import {AiOutlineTags} from 'react-icons/ai';
import {HiOutlineColorSwatch} from 'react-icons/hi';




export const OptionGeneral = ({optionActive, setOptionActive }) => {

    const [themesTab, setThemesTab] = useState(false);
    const [tagTab, setTagTab] = useState(true);

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
                    <p>test Theme</p>
                </SettingPage>
                <SettingPage style={{left: positionTag}}>
                    <p>test Tag</p>
                </SettingPage>


                <SettingBar >
                    <IconsContainer  style={{color: colorTag}}  onClick={() => handleTagClick()}>
                        <AiOutlineTags  fontSize='1.6rem'/>
                        <p>Tags</p>
                    </IconsContainer>
                    <IconsContainer style={{color: colorTheme}}  onClick={() => handleThemesClick() }>
                        <HiOutlineColorSwatch  fontSize='1.6rem'/>
                        <p>Themes</p>
                    </IconsContainer >

                </SettingBar>
               
           </SettingContainer>
        </Modal>
    )
}

