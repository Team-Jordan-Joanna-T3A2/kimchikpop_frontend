import { React, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

// Components
import BookingList from "./BookingList";

const useStyles = makeStyles(theme => ({
  bookingsContainer: {
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "400px",
    margin: "5px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bookingContainer: {
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "600px",
    margin: "5px",
  },
  bookingInfo: {
    lineHeight: "0.3em",
    textAlign: "left",
    marginLeft: "5px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
  },
  button: {
    width: "80px",
  },
}));

const TodayBookings = () => {
  const classes = useStyles();
  const [sortedBookings, setSortedBookings] = useState({});

  const sortBookings = bookings => {
    console.log(bookings);
    const tempSort = {};
    bookings.forEach(booking => {
      let bookingTime = booking.time.match(/\d\d:\d\d/);
      if (tempSort[bookingTime]) tempSort[bookingTime].push(booking);
      else tempSort[bookingTime] = [booking];
    });
    console.log("tempSort", tempSort);

    setSortedBookings(tempSort);
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    axios
      .get("http://localhost:5000/api/reservations/today", config)
      .then(res => {
        sortBookings(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!Object.keys(sortedBookings).length) {
    return <p>There are no bookings</p>;
  } else {
    return (
      <Grid>
        <h1>TODAY'S BOOKINGS</h1>
        <Grid className={classes.bookingsContainer}>
          <BookingList sortedBookings={sortedBookings} />
        </Grid>
      </Grid>
    );
  }
};

export default TodayBookings;
