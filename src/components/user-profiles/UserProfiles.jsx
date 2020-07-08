import React, {useState} from 'react';
import {Typography, Box} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ProfilePhoto from '../assets/images/ProfilePhoto.png';
import './UserProfiles.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    body: {
        fontSize: '14px',
        backgroundColor: '#f8f8f8',
        height: '100%'
    },
    pink: {
        color: '#da0c70'
    },
    green: {
        color: '#78c043'
    },
    blue: {
        color: '#0071cd'
    }
});
const PinkLinearProgress = withStyles(() => ({
    root: {
        height: 10,
        borderRadius: 5
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#da0c70"
    }
}))(LinearProgress);

const GreenLinearProgress = withStyles(() => ({
    root: {
        height: 10,
        borderRadius: 5,
        margin: '5px'
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#78c043"
    }
}))(LinearProgress);

const BlueLinearProgress = withStyles(() => ({
    root: {
        height: 10,
        borderRadius: 5
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#0071cd"
    }
}))(LinearProgress);

export default function UserProfiles() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box display="flex" flexDirection="column" className={classes.body}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box m={2}>
                        <img src={ProfilePhoto}/>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box><strong>Jessi Lane</strong></Box>
                        <Box>jessilane@campusmail.com</Box>
                        <Box ><h1 className={classes.pink}>15898</h1></Box>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Box flexGrow={1}>
                        <strong>Skills</strong>
                    </Box>
                    <Box><AddCircleOutlineIcon/></Box>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>NodeJs</Box>
                        <Box className={classes.pink}>Expert</Box>
                    </Box>
                    <div className={classes.root}>
                        <PinkLinearProgress variant="determinate" value={100}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>ReactJs</Box>
                        <Box className={classes.green}>Intermediate</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={70}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Machine Learning</Box>
                        <Box className={classes.green}>Intermediate</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={70}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Angular</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>MongoDB</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Phyton</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
            </Box>
        </React.Fragment>
    );
}
