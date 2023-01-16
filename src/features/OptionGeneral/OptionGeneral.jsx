import React, { useState } from "react";
import { Modal, SettingContainer, Close, SettingBar, IconsContainer} from "../../style";

import {AiOutlineTags} from 'react-icons/ai';
import {HiOutlineColorSwatch} from 'react-icons/hi';




export const OptionGeneral = ({optionActive, setOptionActive }) => {

    const [themesTab, setThemesTab] = useState(false);
    const [tagTab, setTagTab] = useState(false);




    

    const top = optionActive ? 0 : 1000;
    const opacity = optionActive ? 1 : 0

    return(
        <Modal onClick={() => setOptionActive(false)} style={{opacity: opacity, top: top, alignItems: 'flex-end'}}>
           <SettingContainer>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Close onClick={() => setOptionActive(false)} >X</Close>
                </div>


                <SettingBar >
                    <IconsContainer>
                        <AiOutlineTags fontSize='1.6rem'/>
                        <p>Tags</p>
                    </IconsContainer>
                    <IconsContainer>
                        <HiOutlineColorSwatch  fontSize='1.6rem'/>
                        <p>Themes</p>
                    </IconsContainer >

                </SettingBar>
               
           </SettingContainer>
        </Modal>
    )
}

