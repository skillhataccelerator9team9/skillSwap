import React, { useState } from 'react';
import axios from "axios";

import '../styles/contactUs.css'


const ContactUS = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    console.log("message");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ name, email, message });
      console.log(body);

      const res = await axios.post("http://localhost:80/api/contact", body, config);

      console.log(res.data); // This will contain the JWT token

      console.log("Message sent successfully", res);
      alert("Message sent successful!");
      setStatusMessage("Message sent.....")


      setTimeout(() => {
        setStatusMessage("")
      }, 5000) // Hide the message after 5 seconds


      setName('');
      setEmail('');
      setMessage('');

    } catch (err) {
      console.log(err.text);
      alert("Message failed. Please check.");

      setStatusMessage("Message Failed.....")
      setTimeout(() => {
        setStatusMessage("")
      }, 5000) // Hide the message after 5 seconds
    }

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

export default ContactUS

