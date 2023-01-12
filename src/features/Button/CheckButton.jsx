import React, {useState} from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';

import { theme } from '../../style';
import { BsCheckLg } from 'react-icons/bs';



export const CheckButton = ({todo}) => {
    
       const boxVariant = {
        checked: {
            background: theme.colors.buttonS,
            transition: '0.3s'
        },
        unchecked: {
            background: theme.colors.tertiary,
            transition: '0.3s',
        }
       }
    
       const [checked, setChecked] = useState(false);

     
       const opacity = checked ? 1 : 0;
       const y = checked ? '0' : '3rem';
       

    return(
        <motion.div
                onClick={() => setChecked(!checked)}
                style={{width: '2rem', height: '2rem', borderRadius: '5px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}
                variants={boxVariant}
                animate={checked ? 'checked' : 'unchecked'}
                >
                <BsCheckLg
                style={{transition: '0.3s', color: 'green', fontSize: '1.2rem', fontWeight: 600, opacity: opacity, transition: '0.3s', transform: `translateY(${y})`}}
                animate={checked ? 'checked' : 'unchecked'}
                />
        </motion.div>
    )
}