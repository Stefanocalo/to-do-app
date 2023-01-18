import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { Main,lightBlue, lightGreen, lightRed, lightPurple, darkBlue, darkRed, darkGreen, darkPurple } from './style';

import { Header } from './features/Header/Header';
import { TodoFeed } from './features/TodoFeed/TodoFeed';
import { TodoOptions } from './features/TodoOptions/TodoOptions';

import './index.css';
import { useSelector } from 'react-redux';

function App() {



   //Theming

   const [localTheme, setLocalTheme] = useState('lightBlue');
   const currentTheme = useSelector(state => state.todo.theme);
  
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




  return (
    <>
    <ThemeProvider theme={theme}>
      <Main>
        <Header/>
        <TodoOptions/>
        <TodoFeed />
        {theme && <Toaster 
        position='top-center'
        toastOptions={{
          style:{
            height: '3rem',
            fontSize: '1.1rem',
            color: theme.colors.secondary,
            backgroundColor: theme.colors.primary,
          }
        }}
        />}
      </Main>
    </ThemeProvider>
    </>
  );
}

export default App;
