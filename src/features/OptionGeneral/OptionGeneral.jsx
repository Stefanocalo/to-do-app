import React, { useState, useEffect } from "react";
import { Modal, SettingContainer, Close, SettingBar, IconsContainer, lightTheme, themeDark, SettingPage} from "../../style";

import {AiOutlineTags} from 'react-icons/ai';
import {HiOutlineColorSwatch} from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";


import { Tag } from "../Tag.jsx/Tag";
import { NewTagButton } from "../Tag.jsx/NewTagButton";

import { setTheme } from "../../app/todoSlice";




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
    const [localTheme, setLocalTheme] = useState('lightTheme');
    const currentTheme = useSelector(state => state.todo.theme);
   
    useEffect(() => {
        setLocalTheme(currentTheme);
    }, [currentTheme]);

    let theme = lightTheme;

    const getTheme = () => {
        switch(localTheme){
            case 'lightTheme':
                theme = lightTheme;
            break;
            case 'themeDark':
                theme = themeDark;
            break; 
        }
    }
    getTheme();

    const dispatch = useDispatch();
    

    const top = optionActive ? 0 : 1000;
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
                    <div
                    onClick={() => dispatch(setTheme('themeDark'))}
                    style={{width: '100%', height: '10rem', backgroundColor: 'white'}}>
                    </div>
                    <div
                    onClick={() => dispatch(setTheme('lightTheme'))}
                    style={{width: '100%', height: '10rem', backgroundColor: 'red'}}>
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

