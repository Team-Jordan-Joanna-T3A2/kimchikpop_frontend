import React, { useState } from "react";
import Nav from "../components/Nav";
import DatePicker from "react-date-picker";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bookingContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  formField: {
    display: "flex",    
    flexDirection: "column",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: "gray",
    marginRight: "auto",
  },
  submit: {
    margin: "20px",
    width: theme.buttonWidth,
  },
  bookingForm: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > label": {
    margin: "50px 0px"
  }
}
}));



const Book = () => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState('11:30am');
  const [details, setDetails] = useState({
    reservation: {
      pax: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: ""
    }
  });

  const changeInput = e => {
    setDetails({
     reservation: {
        ...details,
        [e.target.name]: e.target.value,
    }});
  };

  return (
    <div>
      <Nav type="public" />
      <Grid className={classes.bookingContainer}>
        <form className={classes.formField}>
          <label>DATE :</label>
          <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={onChange}
            value={value}
            yearAriaLabel="Year"
            format="dd-MM-yyyy"
          />

          <label>TIME :</label>
          <FormControl className={classes.formField}>
          <RadioGroup value={time} onChange={(e) => setTime(e.target.value)}>
              <FormControlLabel value="11:30am" control={<Radio />} label="11:30am" />
              <FormControlLabel value="1:30pm" control={<Radio />} label="1:30pm" />
              <FormControlLabel value="3:30pm" control={<Radio />} label="3:30pm" />
              <FormControlLabel value="5:30pm" control={<Radio />} label="5:30pm" />
              <FormControlLabel value="7:30pm" control={<Radio />} label="7:30pm" />            
          </RadioGroup>
          </FormControl>

          <Grid className={classes.formField}>
            <label>GUESTS :</label>
            <input name="pax" type="number" min="1" max="5" onChange={changeInput}></input>
            <h2>YOUR DETAILS</h2>
            <label>FIRST NAME :</label>
            <input name="first_name" type="text" />
            <label>LAST NAME :</label>
            <input name="last_name" type="text" />
            <label>EMAIL :</label>
            <input name="email" type="email" />
            <label>PHONE NUMBER :</label>
            <input name="phone_number" type="text" />
          </Grid>

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
