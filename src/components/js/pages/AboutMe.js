import React from "react";
import image from "../../images/Me1.jpg";

export default function AboutMe() {
    return (
        <div className="about-section" id="about-me">
            <h2>Hi, I'm Tiana!</h2>
            <div className="section-text">
                <div className="about-img-container">
                    <img className="about-img" src={image} alt="Tiana Bettinson"/>
                </div>
                <p>
                    A former elementary school math teacher turned full-stack web developer.
                    <span> I utilize my experience leading in the classroom to manage large projects/groups by breaking down
                        complex concepts and delegating tasks.</span>
                    Currently enrolled in Columbia University’s Coding Bootcamp!
                </p>
                <p>Check out my work!</p>
            </div>

        </div>
    )
}