import React from "react";
import './css/style.css';
// import './css/screen-adjust.css';

export default function NavTabs({ currentPage, handlePageChange }) {
    ////////////////////////////////////////////////
    // handlePageChange defined in /Container.js //
    ///////////////////////////////////////////////
    return (
        <div className="navbar">
            {/* Dropdown menu - to be displayed on screens smaller than 800 px */}
            <div className="dropdown">
                <i className="material-icons drop-btn" id="drop-btn" style={{ fontSize: "42px", color: "white" }}>menu</i>
                <div className="drop-content" id="menu" >
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                    <a 
                        href="#work"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                    <a 
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </div>
            </div>
            {/* Full menu - to be displayed on screens > 800 */}
            <ul className="nav-tab">
                <li><a
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a></li>
                <li>
                    <a 
                        href="#work"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li><a 
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a></li>
                <li><a 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a></li>
            </ul>
        </div>
    )
}