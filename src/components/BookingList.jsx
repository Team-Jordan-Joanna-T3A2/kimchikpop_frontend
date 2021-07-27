import React from "react";
import Grid from "@material-ui/core/Grid";
import Person from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    singleBooking: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
        margin: "5px",
        minWidth: "250px"
    },
    bookingsContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        margin: "5px",
        maxWidth: "90%"
    },
    bookingInfo: {
        lineHeight: "0.3em",
    }
}))

const BookingList = props => {
    const classes = useStyles();
  return Object.entries(props.sortedBookings).map(([time, bookings]) =>
    <Grid className={classes.bookingContainer} key={time}>
      <h3>
        BOOKINGS FOR {time}
      </h3>
      {bookings.map(booking =>
        <Grid className={classes.singleBooking} key={booking.id}>
          <p className={classes.bookingInfo}>
            Name: {booking.first_name} {booking.last_name}
          </p>

          <Grid className={classes.bookingInfo} container item direction="row" alignItems="center" justifyContent="center">
            <span>Pax: </span> {new Array(booking.pax).fill(<Person />)}
          </Grid>

          <p className={classes.bookingInfo}>
            Ph: {booking.phone_number}
          </p>
        </Grid>
      )}
    </Grid>
  );
};

export default BookingList;
