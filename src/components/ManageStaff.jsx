import { React, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import clsx from "clsx";

// Components
import ConfirmDelete from "./ConfirmDelete";

const useStyles = makeStyles({
  allStaffContainer: {
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "600px",
    margin: "5px",
    flexWrap: "wrap",
  },
  staffContainer: {
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "600px",
    minWidth: "300px",
    margin: "5px",
  },
  staffInfo: {
    lineHeight: "0.3em",
    textAlign: "left",
    marginLeft: "5px",
  },
  staffType: {
    textTransform: "capitalize",
  },
  button: {
    width: "140px",
    margin: "5px",
  },
  staffInfo: {
    lineHeight: "0.3em",
    textAlign: "left",
    marginLeft: "5px",
  },
  staffType: {
    textTransform: "capitalize",
  },
});

const ManageStaff = () => {
  const classes = useStyles();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);
  const [allStaff, setAllStaff] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };

    console.log("Starting GET");

    axios
      .get("http://localhost:5000/api/users/", config)
      .then(res => {
        setAllStaff(res.data);
      })
      .catch(err => console.log(err));

    console.log(allStaff);
  }, []);

  const deleteStaff = staff => {
    setStaffToDelete(staff);
    setShowConfirmDelete(true);
  };

  if ((allStaff === null))
    return (
      <div>
        <p>There are no users</p>
      </div>
    );

  if (!showConfirmDelete) {
    return (
      <Grid>
        <h1>MANAGE USERS</h1>
        <Grid />
        <Grid>
          <Grid className={classes.allstaffContainer}>
            {allStaff.map((staff, key) => {
              return (
                <Grid key={key} className={classes.staffContainer}>
                  <p className={classes.staffInfo}>
                    ID: {staff.id}
                  </p>
                  <p className={classes.staffInfo}>
                    Username: {staff.username}
                  </p>
                  <p className={clsx(classes.staffInfo, classes.staffType)}>
                    User Type: {staff.user_type}
                  </p>
                  <p className={classes.staffInfo}>
                    Created on:{" "}
                    {new Date(
                      staff.created_at.split("").slice(0, 10).join("")
                    ).toDateString()}
                  </p>
                  <Button
                    className={classes.button}
                    disabled={staff.user_type === "admin" ? true : false}
                    variant="contained"
                    color="primary"
                    onClick={() => deleteStaff(staff)}
                  >
                    DELETE USER
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <ConfirmDelete
        staff={staffToDelete}
        showConfirmDelete={showConfirmDelete}
        setShowConfirmDelete={setShowConfirmDelete}
      />
    );
  }
};

export default ManageStaff;
