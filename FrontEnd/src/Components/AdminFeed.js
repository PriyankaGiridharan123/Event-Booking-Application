import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './AdminFeed.css';
import { useNavigate } from 'react-router-dom';

function AdminFeedback() {

  const [feedbackList, setFeedbackList] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/userside/getAll') 
      .then((response) => {
        setFeedbackList(response.data)
        console.log(feedbackList)
  })
      
      .catch((error) => console.error('Error:', error));
  }, []);

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
    <div className='admin-page'>
    <h1>UNPLUGGED EVENTS</h1>
      <h1>Admin Page</h1>
      <div className='feedback-list'>
        <h3>Feedback List:</h3>
        <ul>
          {feedbackList.map((feedback) => (
            <li key={feedback.id}>
              <p>Full Name: {feedback.fullName}</p>
              <p>Email: {feedback.email}</p>
              <p>Message: {feedback.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminFeedback;
