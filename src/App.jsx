import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// CSS
import './styles/App.css';
import './styles/fonts.css';


// Pages
import CustomerPortal from './pages/CustomerPortal';
import CustomerBook from './pages/CustomerBook';
import StaffPortal from './pages/StaffPortal';
import NotFound from './pages/NotFound';



const theme = createTheme({
  primary: '#000000',
  secondary: '#ffffff',
});


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CustomerPortal} />
        <Route path="/staff" component={StaffPortal} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
