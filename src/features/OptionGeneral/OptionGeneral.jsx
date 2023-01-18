import React, { useState, useEffect } from "react";
import { Modal, SettingContainer, Close, SettingBar, IconsContainer,lightBlue, lightGreen, lightRed, lightPurple, darkBlue, darkRed, darkGreen, darkPurple , SettingPage} from "../../style";

import {AiOutlineTags} from 'react-icons/ai';
import {HiOutlineColorSwatch} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";


import { Tag } from "../Tag.jsx/Tag";
import { NewTagButton } from "../Tag.jsx/NewTagButton";
import { Theme } from "../Theme/Theme";

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

    //Theming
    const [localTheme, setLocalTheme] = useState('lightBlue');
    const currentTheme = useSelector(state => state.todo.theme);
   
    useEffect(() => {
        setLocalTheme(currentTheme);
    }, [currentTheme]);

    let theme = lightBlue;

    const getTheme = () => {
        switch(localTheme){
            case 'lightBlue':
                theme = lightBlue;
            break;
            case lightGreen:
               theme = lightGreen;
             break;
             case lightPurple:
               theme = lightPurple;
             break;
             case lightRed:
               theme = lightRed;
             break;
            case 'darkBlue':
                theme = darkBlue;
            break; 
            case darkGreen:
             theme = darkGreen;
           break;
           case darkPurple:
             theme = darkPurple;
           break;
           case darkRed:
             theme = darkRed;
           break;
        }
    }
    getTheme();    

    const top = optionActive ? 0 : 2000;
    const opacity = optionActive ? 1 : 0
    const colorTheme = themesTab ? theme.colors.buttonP : theme.colors.secondary;
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
                    <div className="overflow">
                        <Theme actualTheme={lightBlue} naming={'Light Blue'}/>
                        <Theme actualTheme={lightGreen} naming={'Light Green'}/>
                        <Theme actualTheme={lightPurple} naming={'Light Purple'}/>
                        <Theme actualTheme={lightRed} naming={'Light Red'}/>
                        <Theme actualTheme={darkBlue} naming={'Dark Blue'}/>
                        <Theme actualTheme={darkGreen} naming={'Dark Green'}/>
                        <Theme actualTheme={darkPurple} naming={'Dark Purple'}/>
                        <Theme actualTheme={darkRed} naming={'Dark Red'}/>
                    </div>
                </SettingPage>


                <SettingPage style={{left: positionTag}}>
                    <div className="overflow">
                        {renderTags()}
                        {tags?.map((tag, index) => (
                            <Tag tag={tag} key={index}/>
                        ))}
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <NewTagButton />
                        </div>
                    </div>
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

