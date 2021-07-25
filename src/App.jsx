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
import StaffSignUp from './pages/StaffSignUp';
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    }
  },
  buttonWidth: "100px",
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={CustomerPortal} />
          <Route exact path="/staff" component={StaffPortal} />
          <Route exact path="/staff/sign-up" component={StaffSignUp} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
