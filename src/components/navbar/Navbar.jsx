import React from 'react';
import {fade, createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {AppBar, Toolbar, Box, IconButton} from '@material-ui/core';
import {Link, Route, Switch} from "react-router-dom";
import styled, {css} from 'styled-components';
import Dashboard from '../dashboard/Dashboard';
import UserHelp from '../user-help/UserHelp';
import MyProfile from '../my-profile/MyProfile';
import Settings from '../settings/Settings';
import Badge from '@material-ui/core/Badge';
import {Menu, MenuItem} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        }
    }
});

const useStyles = makeStyles((theme) => ({
    BrandNavLink: {
        textDecoration: 'none',
        color: 'white',
        margin: '5px',
        fontSize: '18px'
    },
    NavLink: {
        textDecoration: 'none',
        color: 'white',
        margin: '5px'
    },
    rootBox: {
        width: '100%',
        fontSize: '12px'
    },
    mx3: {
        margin: '0 5px 0 5px'
    }
}));

const Circle = styled.div `
    width: 25px;
    height: 25px;
    background-color: green;
    color: white;
    border: 1px solid green;
    border-radius: 50%;
    text-align: center;
    font-size: 14px;
`;

export default function Navbar() {
    const classes = useStyles();
    const [auth,
        setAuth] = React.useState(true);
    const [anchorEl,
        setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            className={classes.rootBox}>
                            <Box borderColor="white">
                                <Link className={classes.BrandNavLink} to="/">
                                    <strong>Campus</strong>
                                </Link>
                            </Box>
                            <Box>
                                <Link className={classes.NavLink} to="/">Dashboard</Link>
                                <Link className={classes.NavLink} to="/UserHelp">User Help</Link>
                                <Link className={classes.NavLink} to="/MyProfile">My Profile</Link>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box
                                    display="flex"
                                    className={classes.mx3}
                                    alignItems="center"
                                    alignContent="center">
                                    <Box display="flex" flexDirection="column">
                                        <p className={classes.mx3}>Jessi Lane</p>
                                        <p className={classes.mx3}>Worker</p>
                                    </Box>
                                    <Link className={classes.NavLink} to="/">
                                        <Circle>JL</Circle>
                                    </Link>
                                </Box>
                                {auth && (
                                    <div>
                                        <IconButton
                                            aria-label="notifitications"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit">
                                            <Badge className={classes.mx3} badgeContent={1} color="secondary"><NotificationsIcon/></Badge>
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                            keepMounted
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                            open={open}
                                            onClose={handleClose}>
                                            <MenuItem onClick={handleClose}>you have 1 unread message</MenuItem>
                                        </Menu>
                                    </div>)}
                                <Link className={classes.NavLink} to="/Settings"><SettingsIcon className={classes.mx3}/></Link>
                                <ExitToAppIcon className={classes.mx3}/>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            < Route exact path="/" component={Dashboard}></Route>
            < Route path="/UserHelp" component={UserHelp}/>
            <Route path="/MyProfile" component={MyProfile}/>
            < Route path="/Settings" component={Settings}/>
        </React.Fragment>
    );
}
