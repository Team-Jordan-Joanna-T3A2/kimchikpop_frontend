import { React, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bookingsContainer: {
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "600px",
    margin: "5px",
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

const AllBookings = () => {
  const classes = useStyles();
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reservations")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));

    console.log(bookings);
  }, []);

  if (bookings === null) {
    return <p>There are no bookings</p>;
  } else {
    return (
      <Grid>
        <h1>MANAGE BOOKINGS</h1>
        <Grid />
        <Grid>
          <Grid className={classes.bookingsContainer}>
            {bookings.map((booking, key) => {
              return (
                <Grid key={key} className={classes.bookingContainer}>
                  <p className={classes.bookingInfo}>
                    Name: {booking.first_name} {booking.last_name}
                  </p>
                  <p className={classes.bookingInfo}>
                    Email: {booking.email}
                  </p>
                  <p className={classes.bookingInfo}>
                    Pax: {booking.pax}
                  </p>
                  <p className={classes.bookingInfo}>
                    Ph: {booking.phone_number}
                  </p>
                  <p className={classes.bookingInfo}>
                    Time: {booking.time}
                  </p>
                  <Grid className={classes.buttons}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      EDIT
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      DELETE
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default AllBookings;
