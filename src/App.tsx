import React from 'react';
import { ThemeProvider } from 'styled-components'

import Header from './components/header/index'
import TextEditor from './components/texteditor';
import usePersistedState from './hooks/usePersistedState';

import GlobalStyle from './styles/global'

//Import Themes
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {

  const [ theme, setTheme ] = usePersistedState('theme', light)

  const toggleTheme = ( ) => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} />
        <TextEditor />
      </div>
    </ThemeProvider>
  );
}

export default App;
