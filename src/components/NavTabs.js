import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './css/style.css';
// import './css/screen-adjust.css';

export default function NavTabs({ currentPage, handlePageChange }) {
    ////////////////////////////////////////////////
    // handlePageChange defined in /Container.js //
    ///////////////////////////////////////////////
    return (
        <Navbar bg="dark" variant="dark" className="navbar">

            <Navbar.Brand>
                <h1>T<span>iana </span>Betti<span>nson</span></h1>
            </Navbar.Brand>
            {/* Dropdown menu - to be displayed on screens smaller than 800 px */}
            <div className="dropdown">
                <i className="material-icons drop-btn" id="drop-btn" style={{ fontSize: "42px", color: "white" }}>menu</i>
                <div className="drop-content" id="menu" >
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'navlink active' : 'navlink'}
                    >
                        About Me
                    </a>
                    <a
                        href="#work"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navlink active' : 'navlink'}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navlink active' : 'navlink'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'navlink active' : 'navlink'}
                    >
                        Resume
                    </a>
                </div>
            </div>
            {/* Full menu - to be displayed on screens > 800 */}
            <Nav variant="tabs" className="nav-tab">
                <Nav.Item className="nav-item">
                    <Nav.Link
                        href="#about-me"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'navlink active' : 'navlink'}
                    >
                        About Me
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link
                        href="#work"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navlink active' : 'navlink'}
                    >
                        Portfolio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navlink active' : 'navlink'}
                    >
                        Contact
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'navlink active' : 'navlink'}
                    >
                        Resume
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}