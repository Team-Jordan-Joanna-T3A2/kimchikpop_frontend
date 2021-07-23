import React from 'react';
import Nav from '../components/Nav';
import InfoMobile1 from '../components/InfoMobile1';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    title: {
      letterSpacing: "-2px",
    },
  }));

const CustomerPortal = () => {
    const classes = useStyles();

    return (
        <div>
        <Nav type="public"/>
        <h1 className={classes.title}>KIMCHI&KPOP</h1>
        <InfoMobile1/>
        </div>
    );
}

export default CustomerPortal;
