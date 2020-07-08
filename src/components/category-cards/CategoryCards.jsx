import React from 'react';
import { Box,Link, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './CategoryCards.scss';
import DescriptionIcon from '@material-ui/icons/Description';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import styled, { css } from 'styled-components';

const items = [
    {
        name: 'Active',
        total: '27'
    }, {
        name: 'Inactive',
        total: '13'
    }, {
        name: 'Public',
        total: '20'
    }, 
    {
        name: 'Private',
        total: '7'
    }
];



const Frame = styled.div`
    width: 210px;
    height: 100px;
    margin:5px;
`;
const BoxCard = styled.button`
    margin:2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border:none;
    background-color: #f8f8f8;
    color: black;
    &:hover{
        background-color: black;
        color: white;
    }
    &.active{
        background-color: black;
        color: white;
    }
    font-size: 14px;
    text-align: left;
    font-weight: bold;
`;

const icons = {
    Active: <DescriptionIcon fontSize="large" color="inherit"/>,
    Inactive: <PriorityHighIcon className="iconSuccess" fontSize="large"/>,
    Public: <PersonOutlineIcon fontSize="large" color="primary"/>,
    Private: <LockIcon fontSize="large" color="secondary"/>,
};

export default function CategoryCard(props) {
    const Cards = items.map((item, i) => (
            <Frame>
                <BoxCard key={i} m={2}>
                    <Box mr={5}>
                        <p>{item.name} Tasks</p>
                        <h2>{item.total}</h2>
                    </Box>
                    <Box p={1}>
                        {icons[item.name]}
                    </Box>
                </BoxCard>
            </Frame>
    ));
    return (
        <Box className="box" display="flex" flexDirection="row" justifyContent="center" m={2}>
            {Cards}
        </Box>
    );
}