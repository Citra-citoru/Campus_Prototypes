import React from 'react';
import './Title.scss';
import Typography from '@material-ui/core/Typography';

{/* Template for Title of The Page*/}
export default function Title(props) {
    return (
        <Typography gutterBottom m={2} variant="H5" component="H1">
            <strong>{props.name}</strong>
        </Typography>
    );
}