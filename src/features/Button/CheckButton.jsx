import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import { lightTheme, themeDark } from '../../style';
import { BsCheckLg } from 'react-icons/bs';
import { updateTodo } from '../../app/todoSlice';



export const CheckButton = ({todo}) => {

    const [checked, setChecked] = useState(false);
    const [nSelected, setNSelected] = useState(0);

    const dispatch = useDispatch();

    const [localTheme, setLocalTheme] = useState('lightTheme');
    const currentTheme = useSelector(state => state.todo.theme);
   
    useEffect(() => {
        setLocalTheme(currentTheme);
    }, [currentTheme]);

    let theme;

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


    useEffect(() => {
        dispatch(updateTodo({
            ...todo,
            isSelected: checked,
        }))
    }, [checked]);

    useEffect(() => {
        todo.isSelected ? setChecked(true) : setChecked(false)
    }, [todo])
    
       const boxVariant = {
        checked: {
            background: theme.colors.buttonS,
            transition: '0.3s'
        },
        unchecked: {
            background: theme.colors.tertiary,
            transition: '0.3s',
        }
    };

        

     
       const opacity = checked ? 1 : 0;
       const y = checked ? '0' : '3rem';
       const background = checked ? theme.colors.buttonP : 'none';
       const measure = checked ? '1.4rem' : 0
       
       //<div style={{width: measure, height: measure, borderRadius: '5px', backgroundColor: background, transition: '0.3s'}} ></div>

    return(
        <motion.div
                onClick={() => setChecked(!checked)}
                style={{width: '2rem', height: '2rem', borderRadius: '5px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}
                variants={boxVariant}
                animate={checked ? 'checked' : 'unchecked'}
                >
            <BsCheckLg style={{transition: '0.3s', color: theme.colors.buttonP , fontSize: '1.2rem', position: 'static', fontWeight: 600, opacity: opacity, transition: '0.3s', transform: `translateY(${y})`}}/>

        </motion.div>
    )
}