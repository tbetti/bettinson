import React from "react";
import '../css/style.css';
import '../css/screen-adjust.css';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className="navbar">
            <div className="dropdown">
                <i className="material-icons drop-btn" id="drop-btn" style={{ fontSize: "42px", color: "white" }}>menu</i>
                <div className="drop-content" id="menu" >
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                        // From here I'm going to adjust the CSS to display this as a different color if active
                    >
                        About Me
                    </a>
                    <a 
                        href="#work"
                        onClick={() => handlePageChange('Work')}
                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                        Work
                    </a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <ul>
                <li><a
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                        // From here I'm going to adjust the CSS to display this as a different color if active
                    >
                        About Me
                    </a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
        </div>
    )
}