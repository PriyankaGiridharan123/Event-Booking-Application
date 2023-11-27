import React, { useState, useEffect } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nav1=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const feedbackData = { fullName, email, message };

    try {
      const response = await fetch('http://localhost:8080/userside/feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        console.log('Feedback sent successfully');
        window.alert('Feedback sent successfully');
        nav1("/")
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send feedback');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  return (
    <div className='feedback-page'>
    <div className="bdy">
    <p id="description"><b>UNPLUGGED EVENTS!</b></p>
      <p id='description'>Let us know Your Feedback</p>

      <div className="contact-form">
        <form action="" onSubmit={handleSubmit} id="contact-form">
          <div className="input-box">
            <input
              type="text"
              required={true}
              name="fullName"
              placeholder='Enter a name..'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>

          <div className="input-box">
            <input
              type="email"
              required={true}
              name="email"
              placeholder='Enter an email..'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="input-box">
            <textarea
              required={true}
              placeholder='Enter description..'
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="input-box">
            <input type="submit" value="Send" name=""></input>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Feedback;
