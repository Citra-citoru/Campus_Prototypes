import React from 'react';
import './ButtonLight.scss';
import {Box, Button, Grid, Switch} from '@material-ui/core';
import {createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        }
    }
});

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        border: '1px solid black',
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '0%'
    },
}));

export default function ButtonLight(){
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Button variant="outlined" color="primary" className={classes.button}>Reset</Button>
        </ThemeProvider>

    );
}

