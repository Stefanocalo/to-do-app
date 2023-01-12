import React, {useState} from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';

import { theme } from '../../style';



export const CheckButton = () => {

    const checkVariants = {
        initial: {
            color: theme.colors.primary,
        },
        checked: {
            pathlenght: 1,
    
        },
        unchecked: {
            pathlength: 0,
        }
       }
    
       const boxVariant = {
        checked: {
            background: '#fff',
            transition: '0.3s'
        },
        unchecked: {
            background: theme.colors.secondary,
            transition: '0.3s',
        }
       }
    
       const [checked, setChecked] = useState(false);

       const pathlenght = useMotionValue(0);
       const opacity = useTransform(pathlenght, [.05, .15], [0, 1])
    

    return(
        <motion.div
                onClick={() => setChecked(!checked)}
                style={{width: '2rem', height: '2rem', borderRadius: '5px', cursor: 'pointer'}}
                variants={boxVariant}
                animate={checked ? 'checked' : 'unchecked'}
                >
                    <motion.svg 
                    style={{pathlenght, opacity}}
                    viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            variants={checkVariants}
                            animate={checked ? 'checked' : 'unchecked'}
                            fill='none'
                            strokeMiterlimit="10"
                            strokeWidth="6"
                            d="M1.5 22L16 36.5L51.5 1"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></motion.path>
                    </motion.svg>
        </motion.div>
    )
}