import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    letterSpacing: "-2px",
  },
}));

const CustomerBook = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <h2>BOOK NOW</h2>
    </div>
  );
};

export default CustomerBook;
