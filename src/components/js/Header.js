import React from 'react';
import '../css/style.css';

export default function Header(){
    return(
        <header className="navbar" id="navbar">
        <h1>T<span>iana </span>Betti<span>nson</span></h1>
        <div className="dropdown">
            <i className="material-icons drop-btn" id="drop-btn" style={{fontSize:"42px", color:"white"}}>menu</i>
            <div className="drop-content" id="menu" >
                <a href="#about-me">About Me</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </header>
    )
}