import React, {useState} from 'react';
import {Typography, Box} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ProfilePhoto from '../assets/images/ProfilePhoto.png';
import DiamondIcon from '../assets/DiamondIcon';
import image from '../assets/images/citra.jpg';
import './UserProfiles.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import styled, { css } from 'styled-components';

const ImgButton = styled.button`
cursor: pointer;
border:none;
background:transparent;
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: "1px solid green";
    border-radius: 50%;
    background-color: "#f8f8f8";
}
`;
const ButtonIcon = styled.button`
    cursor: pointer;
    border:none;
    background:transparent;
`;
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
            <Box display="flex" flexDirection="column" className={classes.body} p={2}>
                <Box display="flex" flexDirection="column" alignItems="center">
                        <ImgButton><img src={image}/></ImgButton>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box className="user-name">
                            <strong>Jessi Lane</strong>
                        </Box>
                        <Box>jessilane@campusmail.com</Box>
                        <Box>
                            <h1 className={classes.pink}><DiamondIcon fill="#da0c70" height="24"/> 15898</h1>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Box flexGrow={1} mx={2} mb={2}>
                        <strong>Skills</strong>
                    </Box>
                    <Box><ButtonIcon><AddCircleOutlineIcon/></ButtonIcon></Box>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>NodeJs</Box>
                        <Box className={classes.pink}>Expert</Box>
                    </Box>
                    <div className={classes.root}>
                        <PinkLinearProgress variant="determinate" value={100}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>ReactJs</Box>
                        <Box className={classes.green}>Intermediate</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={70}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Machine Learning</Box>
                        <Box className={classes.green}>Intermediate</Box>
                    </Box>
                    <div className={classes.root}>
                        <GreenLinearProgress variant="determinate" value={70}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Angular</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <BlueLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>MongoDB</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <BlueLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
                <Box display="flex" flexDirection="column" mx={2} mb={2}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>Phyton</Box>
                        <Box className={classes.blue}>Beginner</Box>
                    </Box>
                    <div className={classes.root}>
                        <BlueLinearProgress variant="determinate" value={40}/>
                    </div>
                </Box>
            </Box>
        </React.Fragment>
    );
}
