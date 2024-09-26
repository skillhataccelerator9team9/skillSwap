import React, { useState } from 'react';

import '../styles/contactUs.css'


const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

  };

  return (
    <div className='contact'>

      <div className="secContainer container grid">

        <div className="contactTitle">
          <h1>Contact Us</h1>
        </div>

        <div className="contactForm">
          <div className="formTitle">
            <h2>Send Us A Message</h2>
          </div>
          <form className="contactUsForm" onSubmit={sendMessage}>
            <input
              className="contactInput"
              type="text"
              name="name"
              value={name}
              placeholder="Your Name" required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="contactInput"
              type="email"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              className="contactInput"
              type="text"
              name="subject"
              value={subject}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            /> */}
            <textarea
              className="contactInput"
              type="text"
              name="message"
              value={message}
              rows="6"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <div className="buttonAndStatus">
              <button
                className="btn btn1"
                type="submit"
              >
                Submit
              </button>
              <h2>
                {statusMessage}
              </h2>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactUs

