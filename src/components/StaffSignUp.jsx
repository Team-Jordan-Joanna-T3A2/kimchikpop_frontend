import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Nav from "../components/Nav";

import SignUpForm from "../components/SignUpForm";

const useStyles = makeStyles(theme => ({
  title: {
    letterSpacing: "-2px",
  },
}));

const StaffSignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav type="staff" />
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <h2>ADD STAFF</h2>
        <SignUpForm/>
      {/* <Login /> */}
    </div>
  );
};

export default StaffSignUp;