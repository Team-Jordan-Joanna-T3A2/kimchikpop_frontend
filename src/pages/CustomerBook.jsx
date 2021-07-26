import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import Book from "../components/Book";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: "60px",
    letterSpacing: "-2px",
  },
  makeBooking: {
    marginTop: "-30px"
  },
  bookingForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  'bookingForm > label': {
    margin: "50px 0px"
  }
}));


const CustomerBook = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>KIMCHI&KPOP</h1>
      <h2 className={classes.makeBooking}>MAKE A BOOKING</h2>
      <Book />
    </div>
  );
};

export default CustomerBook;
