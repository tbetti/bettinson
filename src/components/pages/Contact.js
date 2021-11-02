import React, { useState } from "react";
import { validateEmail } from "../js/helpers";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        }
        if (inputType === 'email') {
            setEmail(inputValue);
        }
        if (inputType === 'message') {
            setMessage(inputValue);
        }
    }

    // Keeps returning false for email validation
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (validateEmail(email) && message !=='') {
            setErrorMessage('Message sent!');
            setName('');
            setEmail('');
            setMessage('');
            return;
        }

    }

    const handleValidation = (event) =>{
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Not a valid email');
            return;
        }
        if(message===''){
            setErrorMessage('You must include a message');
            return;
        }   
    }

    return (
        <div className="contact-section">
            <h2>Contact</h2>
            <p className="section-text">
                If you like my websites, be sure to reach out!
                <span>
                    Also, check out my other work and see what I've been up to on
                    GitHub and LinkedIn.
                </span>
                I look forward to connecting with you!
            </p>
            <form className="contact-form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInput}
                    type="text"
                    placeholder="name"
                    className="form-element"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInput}
                    type="email"
                    placeholder="email"
                    className="form-element"
                    onMouseOut={handleValidation}
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInput}
                    type="text"
                    placeholder="message"
                    className="form-element message"
                    onMouseOut={handleValidation}
                />
                <button
                    type="button"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </form>
            {/* Send message if email invalid or message sent */}
            {errorMessage && (
                <div className="error-message-container">
                    <h4 className="error-message">{errorMessage}</h4>
                </div>
            )}
        </div>
    )
}