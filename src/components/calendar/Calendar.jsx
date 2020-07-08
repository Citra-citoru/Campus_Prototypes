import React, { useState, useEffect} from 'react';
import {Typography, Box, Button, Grid} from '@material-ui/core';
import styled, { css } from 'styled-components';
import './Calendar.scss';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const Frame = styled.div`
  width: 255px;
  box-shadow: 2px 2px 2px #eee;
  background-color:white;
`;

const Header = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f8f8f8;
`;

const arrowButton = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Circle = styled.div`
    ${props =>
        props.isEvent &&
        css`
            width: 2.5px;
            height:2.5px;
            border:1px solid #da0c70;
            background-color: #da0c70;
            border-radius: 50%;
        `}
`;

const Day = styled.div`
  width: 14%;
  height: 35px;
  font-size:14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: black;
      color: white;
      border-radius: 50%;
      border:1px solid black;
    `}

    ${props =>
        props.isEvent &&
        css`
            border:1px solid pink;
        `
    }
`;


{/*this code based on https://dev.to/zhiyueyi/how-to-create-a-simple-react-calendar-with-styled-component-42n6 */}
function Calendar() {
    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
  

  return(
    <React.Fragment>
        <Frame>
      <Header>
        <arrowButton onClick={() => setDate(new Date(year, month - 1, day))}><ArrowBackIosIcon style={{ fontSize: 14 }}/></arrowButton>
        <div>
          {MONTHS[month]} {year}
        </div>
        <arrowButton onClick={() => setDate(new Date(year, month + 1, day))}><ArrowForwardIosIcon style={{ fontSize: 14 }}/></arrowButton>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
            <React.Fragment>
                <Day
                    key={index}
                    isToday={d === today.getDate()}
                    isSelected={d === day}
                    onClick={() => setDate(new Date(year, month, d))}
                >
                    <Wrap>
                    <box>{d > 0 ? d : ''}</box><Circle isEvent={d==1}/>
                    </Wrap>  
                </Day>
            </React.Fragment>
            );
          })}
      </Body>
    </Frame>
    </React.Fragment>
    );  
}

Calendar.propTypes = {
    date:PropTypes.instanceOf(Date),
    year:PropTypes.number
  };

export default Calendar;
