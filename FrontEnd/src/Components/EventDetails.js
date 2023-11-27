import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EventDetails.css';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log(`Fetching event details for ID: ${id}`);
    axios
      .get(`http://localhost:8080/event/events/${id}`)
      .then((response) => {
        console.log('Response data:', response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details', error);
      });
  }, [id]);
  const nav = useNavigate();
  const token = localStorage.getItem("jwtToken");
  if (token === null) {
    nav("/");
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  const handleConfirmBooking = () => {
    if (event) {
      window.print();
      const confirmMessage = `Thanks for booking on UNPLUGGED EVENTS!!`;
      if (window.confirm(confirmMessage)) {
        window.location.href = `/`;
      }
    }
  };

  if (event === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details">
      <h1>Ticket Confirmation</h1>
      <p>EVENT NAME: {event.event}</p>
      <p>PRICE: {event.price}</p>
      <p>DATE: {event.date}</p>
      <p>VENUE: {event.venue}</p>
      <button onClick={handleConfirmBooking}>Download Ticket</button>
    </div>
  );
};

export default EventDetail;
