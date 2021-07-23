import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Nav from "../components/Nav";
import Login from "../components/Login";
import StaffMenu from "../components/StaffMenu";

const useStyles = makeStyles(theme => ({
  title: {
    letterSpacing: "-2px",
  },
}));

const StaffPortal = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav type="staff" />
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <h2>STAFF PORTAL</h2>
        <StaffMenu/>
      {/* <Login /> */}
    </div>
  );
};

export default StaffPortal;
