import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Experience from './components/Experience';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Footer from './components/Footer';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      text: {
        primary: '#fff'
      }
    }),
    ...(mode === 'light') && {
      text: {
        default: '#242D49',
        secondary: '#788097'
      }
    }
  }
});

const App = () => {

  const [mode, setMode] = useState('light');
  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <div
        className="App">
        <Navbar
          change={() => { setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')) }}
          check={mode}
          sx={{
            color: 'text.primary'
          }}
        />
        <Banner sx={{ color: 'text.primary' }} />
        <Services sx={{ color: 'text.primary' }} bgcolor={darkModeTheme} />
        <Experience />
        <Works sx={{ color: 'text.primary' }} />
        <Portfolio sx={{ color: 'text.primary' }} />
        <Comments sx={{ color: 'text.primary' }} />
        <Contact sx={{ color: 'text.primary' }} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
