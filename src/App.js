import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { theme, Main } from './style';

import { Header } from './features/Header/Header';
import { TodoFeed } from './features/TodoFeed/TodoFeed';
import { TodoOptions } from './features/TodoOptions/TodoOptions';

function App() {
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
