import React, {useState} from 'react';
import Tables from '../tables/Tables';
import CategoryCards from '../category-cards/CategoryCards';
import './TaskList.scss';

export default function TaskList(){

    return(
        <React.Fragment>
            <CategoryCards/>
            <Tables/>
        </React.Fragment>
    );
}