import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  confirmContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
  },
  blurb: {
    maxWidth: "300px",
  },
  bookingInfo: {
    lineHeight: "0.3em",
    textAlign: "left",
    marginLeft: "5px",
  },
  bookingType: {
    textTransform: "capitalize",
  },
  error: {
    maxWidth: "300px",
  },
  hidden: {
    display: "none",
  },
}));

const ConfirmDelete = props => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const classes = useStyles();

  const booking = props.booking;

  const confirm = () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    console.log("Starting DELETE");

    axios
      .delete("http://localhost:5000/api/reservations/" + booking.id, config)
      .then(response => {
        console.log(response);
        props.setShowConfirmDelete(false);
      })
      .catch(err => {
        console.log(err);
        setShowErrorMessage(true);
      });
  };

  const cancel = () => {
    props.setShowConfirmDelete(false);
  };

  return (
    <Grid>
      <Grid className={classes.confirmContainer}>
        <p className={classes.blurb}>
          Are you sure you want to delete this booking? This can't be
          undone!
        </p>
        <Grid className={classes.confirmContainer}>
          <p className={classes.bookingInfo}>
            ID: {booking.id}
          </p>
          <p className={classes.bookingInfo}>
            Name: {booking.first_name} {booking.last_name}
          </p>
          <p className={classes.bookingInfo}>
            Booking Time: {booking.time}
          </p>
        </Grid>
        <Grid className={classes.buttons}>
          <Button variant="contained" colour="success" onClick={confirm}>
            CONFIRM
          </Button>
          <Button variant="contained" colour="error" onClick={cancel}>
            CANCEL
          </Button>
        </Grid>
      </Grid>
      <p className={showErrorMessage ? classes.error : classes.hidden}>
        Something went wrong. Please try again later, or if this issue persists
        contact an administrator.
      </p>
    </Grid>
  );
};

export default ConfirmDelete;
