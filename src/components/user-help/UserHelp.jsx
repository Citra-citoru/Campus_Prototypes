import React from 'react';
import './UserHelp.scss';
import {fade, createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Box,
    Grid
} from '@material-ui/core';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 0,
        fontSize:'14px'
    },
    heading: {
        fontSize: theme
            .typography
            .pxToRem(14),
        fontWeight: 'bold',
        flexShrink: 0
    },
    expansionBox: {
        backgroundColor: '#f8f8f8'
    }
}));

export default function UserHelp() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded
            ? panel
            : false);
    };
    return (
        <React.Fragment>
            <Grid className={classes.root} container direction="row">
                <Grid className={classes.row} item sm={9}>
                    <ThemeProvider theme={theme}>
                        <Box p={2} mx={2}>
                            <h1>User Help</h1>
                            <div className={classes.root}>
                                <hr className="header-line"/>
                                <ExpansionPanel
                                    expanded={expanded === 'panel1'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel1')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className="bh-header">
                                        <Typography className={classes.heading}>how to submit the required file for any task?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel2'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel2')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header">
                                        <Typography className={classes.heading}>what does an Inactive task means?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel3'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel3')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header">
                                        <Typography className={classes.heading}>How to submit my submission in case of upload error?</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel4'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel4')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header">
                                        <Typography className={classes.heading}>Pariatur dolor duis exercitation ad sunt officia irure amet.</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel5'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel5')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel5bh-content"
                                        id="panel5bh-header">
                                        <Typography className={classes.heading}>Pariatur dolor duis exercitation ad sunt officia irure amet.</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel6'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel6')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel6bh-content"
                                        id="panel6bh-header">
                                        <Typography className={classes.heading}>Pariatur dolor duis exercitation ad sunt officia irure amet.</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel7'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel7')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel7bh-content"
                                        id="panel4bh-header">
                                        <Typography className={classes.heading}>Pariatur dolor duis exercitation ad sunt officia irure amet.</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel
                                    expanded={expanded === 'panel8'}
                                    className={classes.expansionBox}
                                    onChange={handleChange('panel8')}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ThemeProvider theme = {theme}><ArrowDropDownCircleIcon color="primary"/> </ThemeProvider>}
                                        aria-controls="panel8bh-content"
                                        id="panel8bh-header">
                                        <Typography className={classes.heading}>Pariatur dolor duis exercitation ad sunt officia irure amet.</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            Do dolor non occaecat aliquip laboris exercitation laboris reprehenderit sunt
                                            minim laboris in ea commodo. Commodo qui enim anim non et excepteur ullamco
                                            incididunt labore anim aliqua amet. Nostrud nulla labore mollit sit ut anim
                                            dolor proident non deserunt fugiat anim sint. Ea reprehenderit sunt ex qui ex
                                            ipsum esse aliquip. Ut quis esse dolore est minim ea excepteur exercitation
                                            fugiat ea tempor aute. Eu aliqua veniam est incididunt incididunt proident
                                            adipisicing.In ad ea dolore velit sint labore ullamco. Lorem fugiat do aliquip
                                            ut et sunt proident minim pariatur aute ullamco officia ipsum. Consequat quis
                                            labore aute cillum duis excepteur incididunt aute. Laboris ut voluptate occaecat
                                            mollit ut velit.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </Box>

                    </ThemeProvider>
                </Grid>
                <Grid item sm={3}>
                    <Box className="left-bar full-height" p={2} mx={2}>
                        <Box className="title">
                            <Typography variant="h5">
                                <strong>Contact Us</strong>
                            </Typography>
                            <hr className="line"/>
                        </Box>
                        <Box className="box-phone-no">
                            <Typography variant="p">
                                <strong>Phone No.</strong>
                            </Typography>
                            <Box display="flex" flexDirection="row">
                                <Box m={2}>
                                    <CallOutlinedIcon/>
                                </Box>
                                <Box flexGrow={1} m={2}>
                                    <div>1800 588 789</div>
                                    <div>1800 588 790</div>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="box-email-support">
                            <Typography variant="p">
                                <strong>Email Support</strong>
                            </Typography>
                            <Box display="flex" flexDirection="row">
                                <Box m={2}>
                                    <HelpOutlineIcon/>
                                </Box>
                                <Box flexGrow={1} m={2}>
                                    <div>support@campus.com</div>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="box-address">
                            <Typography variant="p">
                                <strong>Address</strong>
                            </Typography>
                            <Box display="flex" flexDirection="row">
                                <Box m={2}>
                                    <LocationOnOutlinedIcon/>
                                </Box>
                                <Box flexGrow={1} m={2}>
                                    <div>22B, Baker Street</div>
                                    <div>New York City, NY</div>
                                    <div>55941</div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
