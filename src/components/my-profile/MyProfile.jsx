import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import './MyProfile.scss';
import UserProfile from '../user-profiles/UserProfiles';
import DoughnutChart from '../chart-doughnut/DoughnutChart';
import BarChart from '../chart-bar/BarChart';
import barData from '../../mock-data/barData.json';
import doughnutData from '../../mock-data/DoughnutData.json';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bardata: barData,
            doughnutdata: doughnutData
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({bardata: barData});
            this.setState({doughnutdata: doughnutData});
        }, 5000)
    }

    render() {
        return (
            <React.Fragment>
                <Grid container direction="row">
                    <Grid item xs={9} className="chart">
                        <Box m={3} pl={2}>
                            <h1>
                                <strong>My Profile</strong>
                            </h1>
                        </Box>
                        <Box display="flex" flexDirection="row" alignContent="center" m={3}>
                            <Box className="doughnut" display="flex" flexDirection="column" m={2}>
                                <Box m={2}>
                                    <strong>Tasks</strong>
                                </Box>
                                <Box>
                                    <DoughnutChart
                                        doughnutdata={this.state.doughnutdata}
                                        doughnutcolor={['#da0c70', '#01b2ac']}/>
                                </Box>
                            </Box>
                            <Box className="point-bar" display="flex" flexDirection="column" m={2}>
                                <Box display="flex" flexDirection="row" m={2}>
                                    <Box flexGrow={1}>
                                        <strong>Points Earned</strong>
                                    </Box>
                                    <Box>Last 1 Year</Box>
                                </Box>
                                <BarChart bardata={this.state.bardata} barcolor="RGB(0, 113, 205)"/>
                            </Box>
                        </Box>
                        <Box className="taskCompleted-bar" display="flex" flexDirection="column"  m={5} p={2}>
                            <Box display="flex" flexDirection="row" m={2}>
                                <Box flexGrow={1}>
                                    <strong>Task Completed</strong>
                                </Box>
                                <Box>Last 1 Year</Box>
                            </Box>
                            <BarChart bardata={this.state.bardata} barcolor="#00b2ac"/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <UserProfile/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}