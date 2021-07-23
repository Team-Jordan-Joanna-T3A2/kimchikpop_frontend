import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

const Login = () => {
    const classes = useStyles();
    
    return (
        <div>
            <Grid className={classes.formField}>
                <label className={classes.label}>USERNAME
                </label>
                <input type="text" name="userName"/>
                <label className={classes.label}>PASSWORD
                </label>
                <input type="password" name="password"/>
                <Button variant="contained" color="primary" className={classes.submit}>LOG IN</Button>
            </Grid>
            
        </div>
    );
}

export default Login;
