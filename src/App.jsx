import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// CSS
import './styles/App.css';
import './styles/fonts.css';


// Pages
import CustomerPortal from './pages/CustomerPortal';
import CustomerBook from './pages/CustomerBook';
import StaffPortal from './pages/StaffPortal';



const theme = createTheme({
  primary: '#000000',
  secondary: '#ffffff',
});


function App() {
  return (
    <Router>
      <Route path="/" component={CustomerPortal} />
      <Route path="/book" component={CustomerBook} />
      <Route path="/staff" component={StaffPortal} />
    </Router>
  );
}

export default App;
