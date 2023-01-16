import React from "react";
import { Modal, ModalContainer,TagPanel , FormContainer, Close } from "../../style";
import {MdOutlineClose} from 'react-icons/md';

export const ModifyTag = ({edit, setEdit, tag}) => {

    const position = edit ? '6rem' : '-100%' 
    return(
        <Modal style={{bottom: `${position}`,position: 'fixed', transition: '0.3s'}} >
            <TagPanel style={{bottom: 0, transition: '0.3s'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%', height: '100%'}}>
                    <Close 
                    onClick={() => setEdit(false)}
                    role='button'>
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>

                </FormContainer>
            </TagPanel>
            
        </Modal>
    )
}