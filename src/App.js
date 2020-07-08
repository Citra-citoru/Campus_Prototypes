import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import './App.scss';

export default function App(){
   return(
    <BrowserRouter>
        <Navbar/>
        {/*<footer>Footer Section here!</footer>*/}
    </BrowserRouter>
   );
}