import React from 'react';
import './ButtonDark.scss';
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
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '0%'
    },
}));

export default function ButtonDark(){
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className={classes.button}>Save Changes</Button>
        </ThemeProvider>
    );
}

