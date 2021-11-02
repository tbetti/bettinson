import React from 'react';
import resumeImage from '../images/Resume.png';
import resumePdf from '../resume/resume.pdf';

export default function Resume() {
    return (
        <div className="master-container">
            <h2 className="resume-title">Resume & Proficiencies</h2>
            <div className="resume-list-container">
                <div>
                    <h3 className="resume-heading">Frontend:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                    <h3 className="resume-heading">Backend:</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Socket.IO</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <a href={resumePdf} target="_blank">
                    <img src={resumeImage} alt="Tiana Bettinson - Resume" />
                </a>
            </div>
        </div>
    )
}