import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { Main, themeDark, lightTheme } from './style';

import { Header } from './features/Header/Header';
import { TodoFeed } from './features/TodoFeed/TodoFeed';
import { TodoOptions } from './features/TodoOptions/TodoOptions';

import './index.css';
import { useSelector } from 'react-redux';
import { setTheme } from './app/todoSlice';

function App() {



   //Theming

   const [localTheme, setLocalTheme] = useState('lightTheme');
   const currentTheme = useSelector(state => state.todo.theme);
  
   useEffect(() => {
       setLocalTheme(currentTheme);
   }, [currentTheme]);

   let theme = lightTheme;

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
