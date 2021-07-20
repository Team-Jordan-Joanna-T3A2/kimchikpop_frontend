import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import NavPublic from './components/NavPublic';
import './App.css';

const theme = createTheme({
  primary: '#000000',
  secondary: '#ffffff',
});


function App() {
  return (
    <div className="App">
    <NavPublic />
    <h1>Kimchi & Kpop</h1>
    <p>Hello World!</p>
    </div>
  );
}

export default App;
