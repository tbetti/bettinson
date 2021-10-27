import React from 'react';
import Container from './Container';
import '../css/style.css';
import '../css/screen-adjust.css';

export default function Header(){
    return(
    <header className="navbar" id="navbar">
        <h1>T<span>iana </span>Betti<span>nson</span></h1>
        <Container />
    </header>
    )
}