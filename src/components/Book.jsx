import React, { useState } from "react";
import Nav from "../components/Nav";
import DatePicker from "react-date-picker";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";

// Components
import AddBookingSuccess from "./AddBookingSuccess";

const useStyles = makeStyles((theme) => ({
  bookingContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    borderRadius: "5px",
    padding: "5px",
    minWidth: "300px",
    marginTop: "-60px"
  },
  formField: {
    display: "flex",    
    flexDirection: "column",
    textAlign: "left",
    alignItems: "center",
  },
  radio: {
    display: "flex", 
    flexDirection: "column",
    flexWrap: "wrap",
  },
  label: {
    color: "gray",
    marginRight: "auto",
    textAlign: "left"
  },
  submit: {
    margin: "40px",
    width: "160px",
  },
  bookingForm: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > label": {
    margin: "50px 0px"
  }
},
inputField: {
  width: "150px"
}
}));



const Book = () => {
  const classes = useStyles();
  const [bookingSent, setBookingSent] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('11:30am');
  const [details, setDetails] = useState({
    reservation: {
      pax: "",
      first_name: "",
      last_name: "",
      time: "11:30am",
      email: "",
      phone_number: "",
      confirmed: true
    }
  });


  const changeInput = e => {
    setDetails({
     reservation: {
        ...details.reservation,
        [e.target.name]: e.target.value,
    }});
  };

  const submitBooking = () => {

      const body = details

    body.reservation.time = date.toDateString() + " " + body.reservation.time;
    console.log("body", body);
    console.log("Starting POST");
    axios
      .post("https://quiet-atoll-98684.herokuapp.com/api/reservations", body)
      .then((res) => {
        setBookingSuccess(true);
        console.log(res.message);
    })
      .catch(errors => console.log(errors));

    setBookingSent(true);
  };

  // const submitBooking = async e =>{
  //   const body = details

  //   body.reservation.time = date.toDateString() + " " + body.reservation.time;
  //   console.log(body);

  //   try {
  //     e.preventDefault()
  //     const saveData = await axios.post('https://quiet-atoll-98684.herokuapp.com/api/reservations', body, 
  //     {
  //       headers:{'Content-Type': 'application/json'}
  //     })
  //     console.log(saveData)
  //   }
  //   catch(exception){
  //     console.log(exception.response)
  //   }
  // }
  if (!bookingSent) {
  return (
    <div>
      <Nav type="public" />
      <Grid className={classes.bookingContainer}>
        <form className={classes.formField} onSubmit={submitBooking}>
          <label className={classes.label}>DATE :</label>
          <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={setDate}
            value={date}
            yearAriaLabel="Year"
            format="dd-MM-yyyy"
          />

          <label className={classes.label}>TIME :</label>
          <FormControl className={clsx(classes.formField, classes.radio)}>
          <RadioGroup name="time" value={details.reservation.time} onChange={changeInput}>
              <FormControlLabel value="11:30am" control={<Radio />} label="11:30am" />
              <FormControlLabel value="1:30pm" control={<Radio />} label="1:30pm" />
              <FormControlLabel value="3:30pm" control={<Radio />} label="3:30pm" />
              <FormControlLabel value="5:30pm" control={<Radio />} label="5:30pm" />
              <FormControlLabel value="7:30pm" control={<Radio />} label="7:30pm" />            
          </RadioGroup>
          </FormControl>

          <Grid className={classes.formField}>
            <label className={classes.label}>GUESTS :</label>
            <input className={classes.inputField} name="pax" type="number" value={details.reservation.pax} min="1" max="5" onChange={changeInput}></input>
            
            <h2>YOUR DETAILS</h2>

            <label className={classes.label}>FIRST NAME :</label>
            <input name="first_name" type="text" value={details.reservation.first_name} onChange={changeInput} />

            <label className={classes.label}>LAST NAME :</label>
            <input name="last_name" type="text" value={details.reservation.last_name} onChange={changeInput} />

            <label className={classes.label}>EMAIL :</label>
            <input name="email" type="email" value={details.reservation.email} onChange={changeInput} />

            <label className={classes.label}>PHONE NUMBER :</label>
            <input name="phone_number" type="text" value={details.reservation.phone_number} onChange={changeInput} />
          </Grid>

          <Button
            variant="contained"
            color="primary"
            id="submit"
            type="submit"
            className={classes.submit}
          >
            SUBMIT BOOKING
          </Button>
        </form>
      </Grid>
    </div>
  ) } else { 
    return(
      <AddBookingSuccess setBookingSent={setBookingSent} success={bookingSuccess ? true : false} />
    )
  }
};

export default Book;
