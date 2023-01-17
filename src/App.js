import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { theme, Main, themeDark, lightTheme } from './style';

import { Header } from './features/Header/Header';
import { TodoFeed } from './features/TodoFeed/TodoFeed';
import { TodoOptions } from './features/TodoOptions/TodoOptions';

import './index.css';
import { useSelector } from 'react-redux';

function App() {


  const [currentTheme, setCurrentTheme] = useState('');

  const currentStateTheme = useSelector(state => state.todo.theme);

  
  const theming = lightTheme;

  console.log(currentStateTheme);



  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header/>
        <TodoOptions/>
        <TodoFeed />
        <Toaster 
        position='top-center'
        toastOptions={{
          style:{
            height: '3rem',
            fontSize: '1.1rem',
            color: theme.colors.secondary,
            backgroundColor: theme.colors.primary,
          }
        }}
        />
      </Main>
    </ThemeProvider>
  );
}

export default App;
