import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // Maybe include an error message to display???

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="contact-section">
            <h2>Contact</h2>
            <p class="section-text">
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
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInput}
                    type="text"
                    placeholder="message"
                    className="form-element message"
                />
                <button
                    type="button"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}