import React from "react"; 

import { Modal, ModalContainer, Close, FormContainer } from "../../style";
import {MdOutlineClose} from 'react-icons/md';

export const Warning  = ({warning ,setWarning}) => {

    const scale = warning ? 1 : 0;

    return(
        <Modal style={{ top: 0, scale:` ${scale}`, transition: '0.3s'}}>
            <ModalContainer style={{scale:` ${scale}`, transition: '0.3s'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '100%', height: '100%'}}>
                    <Close 
                    onClick={() => setWarning(false)}
                    role='button'
                    >
                        <MdOutlineClose style={{fontSize: '1.3rem'}}/>
                    </Close>
                </div>
                <FormContainer>
                </FormContainer>
            </ModalContainer>
        </Modal>
                 
    )
}