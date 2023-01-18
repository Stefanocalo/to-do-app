import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

//Style
import {lightBlue,
    lightGreen,
    lightRed,
    lightPurple,
    darkBlue,
    darkRed,
    darkGreen,
    darkPurple
} from '../../style';
import { BsCheckLg } from 'react-icons/bs';

//Actions
import { updateTodo } from '../../app/todoSlice';



export const CheckButton = ({todo}) => {

    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const [localTheme, setLocalTheme] = useState('lightBlue');
    const currentTheme = useSelector(state => state.todo.theme);
   

    //Theming
    useEffect(() => {
        setLocalTheme(currentTheme);
    }, [currentTheme]);

    let theme = lightBlue;

    const getTheme = () => {
        switch(localTheme){
            case 'lightBlue':
                theme = lightBlue;
            break;
            case 'lightGreen':
               theme = lightGreen;
             break;
             case 'lightPurple':
               theme = lightPurple;
             break;
             case 'lightRed':
               theme = lightRed;
             break;
            case 'darkBlue':
                theme = darkBlue;
            break; 
            case 'darkGreen':
             theme = darkGreen;
           break;
           case 'darkPurple':
             theme = darkPurple;
           break;
           case 'darkRed':
             theme = darkRed;
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
            background: theme.colors.tertiary,
            transition: '0.3s'
        },
        unchecked: {
            background: theme.colors.buttonS,
            transition: '0.3s',
        }
    };

        
//Variables
     
       const opacity = checked ? 1 : 0;
       const y = checked ? '0' : '3rem';

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