import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import AddStaffSuccess from "./AddStaffSuccess"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  match: {
    display: "none",
  },
  noMatch: {
    display: "initial",
    color: "red",
    margin: "0px",
    padding: "0px",
  },
  label: {
    textAlign: "left",
    marginBottom: "0px",
  },
  field: {
    marginTop: "0px",
  },
}));

const SignUpForm = () => {
  let history = useHistory();

  const [signUpSent, setSignUpSent] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    user: {
      username: "",
      password: "",
      password_confirmation: "",
      user_type: "",
    },
  });

  const classes = useStyles();

  const changeInput = e => {
    setSignUpForm({
      user: {
        ...signUpForm.user,
        [e.target.name]: e.target.value,
      },
    });
    console.log(signUpForm);
  };

  const submitForm = () => {
    if (passwordsMatch === false) return;

    console.log("Starting POST");
    const data = JSON.stringify(signUpForm);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    axios
      .post("http://localhost:5000/api/users/addstaff", signUpForm, config)
      .then(() =>
        setRequestSuccess(true)
      )
      .catch(errors => {
        console.log(errors);
      });

      setSignUpSent(true);
  };

  const checkPasswordConfirmation = e => {
    changeInput(e);
    if (e.target.value.length === 0 || signUpForm.user.password.length === 0) {
      setPasswordsMatch(false);
    } else if (e.target.value === signUpForm.user.password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const { username, password, password_confirmation } = signUpForm.user;

  useEffect(() => {
    if (username.length > 0 && password.length > 0 && passwordsMatch === true) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  });

if(!signUpSent) {
  return (
    <div>
      <Grid className={classes.root}>
        <form className={classes.root}>
          <label className={classes.label}>USERNAME</label>
          <input
            className={classes.field}
            type="text"
            value={username}
            onChange={changeInput}
            name="username"
          />

          <label className={classes.label}>PASSWORD</label>
          <input
            className={classes.field}
            type="password"
            value={password}
            onChange={checkPasswordConfirmation}
            name="password"
          />

          <label className={classes.label}>CONFIRM PASSWORD</label>
          <input
            className={classes.field}
            type="password"
            value={password_confirmation}
            onChange={checkPasswordConfirmation}
            name="password_confirmation"
          />
        </form>
        <Button
          variant="contained"
          color={formIsValid === true ? "primary" : ""}
          disabled={formIsValid === true ? false : true}
          id="submit"
          className={classes.submit}
          onClick={submitForm}
        >
          ADD NEW STAFF
        </Button>
        <p className={passwordsMatch ? classes.match : classes.noMatch}>
          Passwords do not match
        </p>
      </Grid>
    </div>
  );
} else {
  return(<AddStaffSuccess success={requestSuccess ? true : false}/>)
}
};

export default SignUpForm;
