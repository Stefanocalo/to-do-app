import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//Style

import { ThemeSquare,
    TagOption,
    FirstThemeSquare,
    LastThemeSquare,
    darkBlue,
    darkRed,
    darkGreen,
    darkPurple 
} from "../../style";

//Actions

import { setTheme } from "../../app/todoSlice";


export const ThemeDark = ({actualTheme, naming}) => {

    const [theming, setTheming] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        switch(actualTheme) {
           
            case darkBlue:
                setTheming('darkBlue')
            break;
            case darkGreen:
                setTheming('darkGreen')
            break;
            case darkPurple:
                setTheming('darkPurple')
            break;
            case darkRed:
                setTheming('darkRed')
            break;
        }
    }, [actualTheme])
    

    return(
        <TagOption 
        onClick={() => dispatch(setTheme(theming))}
        role='button'
        >
            <p style={{width: '6rem', margin: '1rem'}} >{naming}</p>

            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', width: '100%'}}>
                <FirstThemeSquare style={{backgroundColor: actualTheme.colors.secondary, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.quaternary, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonS, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonP, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonPhover, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.primary, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <LastThemeSquare style={{backgroundColor: actualTheme.colors.tertiary, border: `1px solid ${actualTheme.colors.secondary}`}} />
            </div>

        </TagOption>

    )
}

