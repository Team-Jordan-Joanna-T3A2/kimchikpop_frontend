import React from "react";
import Nav from "../components/Nav";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Nav type="none"/>
      <p>you find yourself in a strange place</p>
      <h2>PAGE NOT FOUND</h2>
      <Button variant="contained" color="primary" onClick={goBack}>
        TAKE ME BACK
      </Button>
    </div>
  );
};

export default NotFound;
