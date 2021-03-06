import React from 'react';
import './css/style.css';
// import './css/screen-adjust.css';

export default function Footer() {
    return (
        <footer>
            <h4>Coded and Designed by Tiana Bettinson</h4>
            <div className="contact-container">
                <a href="mailto:tiana.bettinson@gmail.com" target="_blank">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/tianabettinson/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/tbetti" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </footer>
    )
}