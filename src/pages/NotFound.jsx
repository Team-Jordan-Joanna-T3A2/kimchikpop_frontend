import React from "react";
import Nav from "../components/Nav";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <Nav type="public" />
      <p>you find yourself in a strange place</p>
      <h2>PAGE NOT FOUND</h2>
      <Button variant="contained" color="primary" component={Link} to="/">
        HOME
      </Button>
    </div>
  );
};

export default notFound;
