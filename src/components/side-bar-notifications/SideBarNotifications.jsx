import React from 'react';
import './SideBarNotifications.scss';
import {Box, Link} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import styled, {css} from 'styled-components';
const items = [
    {
        date: 'June 12th, 2020',
        title: 'IOS Barcode Scanner- Scan Multiple Barcode ...'
    }, {
        date: 'June 14th, 2020',
        title: 'CFO Forecasting-Mobile Market-Fine Tuning Challenge'
    }, {
        date: 'June 16th, 2020',
        title: 'Infant Nutrition - Product Scraper-Historical Data'
    }, {
        date: 'June 19th, 2020',
        title: 'Dragonnet dRisk-ReactJs Unit Tests'
    }
];
const Frame = styled.div`
    width: 255px;
`;
const Wrap = styled.button`
    cursor: pointer;
    width:255px;
    height:100px;
    border:none;
    border-left:2px solid #da0c70;
    margin: 5px 0px 5px 0px;
    text-align: left;
    background-color:white;
    &:hover{
        background-color: #da0c70:
        color: #da0c70;
    }
    ${props => props.isFirst && css`
           background-color: #da0c70;
           color:white;
        `}
`;

export default function SideBarNotifications() {
    const notificationList = items.map((item, i) => {
        return (
            <Frame>
                <Wrap isFirst={i==0}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>
                            <Typography gutterBottom variant="p"><strong>{item.date}</strong></Typography>
                        </Box>
                        <Box>
                            <NotificationsNoneIcon color="disabled"/>
                        </Box>
                    </Box>
                    <Typography gutterBottom variant="p">{item.title}</Typography>
                </Wrap>
            </Frame>
        );
    })
    return (
        <Box className="container">
            {notificationList}
        </Box>
    )
}