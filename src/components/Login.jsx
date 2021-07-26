import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  formField: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    alignItems: "center",
  },
  label: {
    color: "gray",
    marginRight: "auto",
  },
  submit: {
    margin: "20px",
    width: theme.buttonWidth,
  },
}));

const Login = () => {
    let  history= useHistory();
  const classes = useStyles();
  const [logIn, setLogIn] = useState({});

  const handleChange = e => {
    setLogIn({
      ...logIn,
      [e.target.name]: e.target.value,
    });
  };

  const sendLogIn = () => {
    console.log("Starting POST");
    // const data = JSON.stringify(signUpForm);
    axios
      .post("http://localhost:5000/api/users/login", logIn)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        history.push("/staff/");
      })
      .catch(errors => {
        console.log(errors);
        history.push("/staff/login");
      });
  };

  return (
    <Grid className={classes.formField}>
      <label className={classes.label}>USERNAME</label>
      <input type="text" name="username" onChange={handleChange} />
      <label className={classes.label}>PASSWORD</label>
      <input type="password" name="password" onChange={handleChange} />
      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={sendLogIn}
      >
        LOG IN
      </Button>
    </Grid>
  );
};

export default Login;
