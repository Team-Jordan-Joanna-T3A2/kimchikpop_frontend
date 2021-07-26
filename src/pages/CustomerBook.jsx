import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import Book from "../components/Book";

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
      <h2>MAKE A BOOKING</h2>
      <Book />
    </div>
  );
};

export default CustomerBook;
