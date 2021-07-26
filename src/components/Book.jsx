import React, { useState } from "react";
import Nav from "../components/Nav";
import DatePicker from 'react-date-picker'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
    formField: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'center',
    },
    label: {
        color: 'gray',
        marginRight: 'auto'
    },
    submit: {
        margin: '20px',
        width: theme.buttonWidth
    }
}))



const Book = () => {
    const classes = useStyles();  
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Nav type="public" />
      <Grid className={classes.formField}>

      <form className="booking-form">
        <label>DATE & TIME :</label>
        <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={onChange}
            value={value}
            yearAriaLabel="Year"
        />

        <label>GUESTS :</label>
        <input type="number" min="1" max="5"></input>

        <h2>YOUR DETAILS</h2>
        <label>FIRST NAME :</label>
        <input type="text" />

        <label>LAST NAME :</label>
        <input type="text" />

        <label>EMAIL :</label>
        <input type="email" />

        <label>PHONE NUMBER :</label>
        <input type="text" />

        <Button
          variant="contained"
          color="primary"
          id="submit"
          className={classes.submit}
        >
          SUBMIT BOOKING
        </Button>
        
      </form>
      </Grid>
    </div>
  );
};

export default Book;
