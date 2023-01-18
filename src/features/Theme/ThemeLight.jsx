import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


//Style
import { ThemeSquare,
    TagOption,
    FirstThemeSquare,
    LastThemeSquare,
    lightBlue,
    lightGreen,
    lightRed,
    lightPurple
} from "../../style";

//Actions
import { setTheme } from "../../app/todoSlice";

export const ThemeLight = ({actualTheme, naming}) => {

    const [theming, setTheming] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        switch(actualTheme) {
            case lightBlue:
                setTheming('lightBlue')
            break;
            case lightGreen:
                setTheming('lightGreen')
            break;
            case lightPurple:
                setTheming('lightPurple')
            break;
            case lightRed:
                setTheming('lightRed')
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
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonPhover, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonP, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.quaternary, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.buttonS, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <ThemeSquare style={{backgroundColor: actualTheme.colors.tertiary, border: `1px solid ${actualTheme.colors.secondary}`}} />
                <LastThemeSquare style={{backgroundColor: actualTheme.colors.primary, border: `1px solid ${actualTheme.colors.secondary}`}} />
            </div>

        </TagOption>

    )
}

