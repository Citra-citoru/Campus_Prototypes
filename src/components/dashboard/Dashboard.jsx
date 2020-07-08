import React, {useState} from 'react';
import './Dashboard.scss';
import TaskList from '../task-list/TaskList';
import Calendar from '../calendar/Calendar';
import SideBarNotifications from '../side-bar-notifications/SideBarNotifications';
import Title from '../assets/Title';
import {Typography, Box, Button, Grid} from '@material-ui/core';
import {Tabs, Tab, Paper} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import 'react-calendar/dist/Calendar.css';
import {Link, Route, Switch} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        }
    }
});

export default function Dashboard() {
    const [tabValue,setTabValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <React.Fragment>
                <Grid container direction="row">
                    <Grid item sm={9} p={2} m={2}>
                        <Box flexGrow={1} className="box" display="flex">
                            <Box flexGrow={1} p={2} m={2}>
                                <Title name="Dashboard"/>
                            </Box>
                            <Box p={2} m={2}>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary">Create Task</Button>
                            </ThemeProvider>
                            </Box>
                        </Box>
                        <Box>
                        <ThemeProvider theme={theme}>
                            <Paper square>
                                <Tabs
                                    value={tabValue}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    onChange={handleChange}
                                    aria-label="disabled tabs example">
                                    <Tab label="All Created Tasks">
                                        <Link to="/TaskList">All Created Tasks</Link>
                                    </Tab>
                                    <Tab label="My Task Table">
                                        <Link to="/TaskList">My Task Table</Link>
                                    </Tab>
                                </Tabs>
                            </Paper>
                            <TaskList/>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box className="sideBar" display="flex" flexDirection="column" alignItems="center">
                           <h3>Upcoming Deadlines</h3>
                            <Calendar/>
                            <SideBarNotifications/>
                        </Box>
                    </Grid>
                </Grid>
            <Route exact path="/TaskList" component={TaskList}></Route>
        </React.Fragment>
    )
}