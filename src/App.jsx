import React from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// CSS
import "./styles/App.css";
import "./styles/fonts.css";

// Pages
import CustomerPortal from "./pages/CustomerPortal";
import CustomerBook from "./pages/CustomerBook";
import StaffPortal from "./pages/StaffPortal";
import NotFound from "./pages/NotFound";
import Menu from "./components/info/Menu";
import About from "./components/info/About";
import Gallery from "./components/info/Gallery";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
  buttonWidth: "100px",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/staff" component={StaffPortal} />
          <Route path="/book" component={CustomerBook} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route exact path="/" component={CustomerPortal} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
