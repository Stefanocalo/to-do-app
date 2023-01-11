import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';

import { theme } from './style';

import { Header } from './features/Header/Header';
import { TodoFeed } from './features/TodoFeed/TodoFeed';
import { TodoOptions } from './features/TodoOptions/TodoOptions';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <TodoFeed />
      <TodoOptions/>
    </ThemeProvider>
  );
}

export default App;
