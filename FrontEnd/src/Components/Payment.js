import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/event/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details', error);
      });
  }, [id]);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !cardType.trim() || !cardNumber.trim() || !expireDate.trim() || !cvv.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    if (isNaN(cardNumber) || isNaN(cvv)) {
      alert('Card Number and CVV should be numeric.');
      return;
    }
  
    if (cardNumber.length !== 16 ) {
      alert('Card Number should be 16 digits.');
      return;
    }
    if (cvv.length !== 3) {
      alert('CVV should be 3 digits.');
      return;
    }

    const paymentRequest = {
      eventid: id,
      eventName: event.event,
      name,
      email,
      cardType,
      cardNumber,
      expireDate,
      cvv,
    };

    axios.post('http://localhost:8080/userside/postpayment', paymentRequest)
      .then((response) => {
        alert('Payment Successful! Thank you for booking.');

        navigate(`/events/${id}`);
      })
      .catch((error) => {
        console.error('Error submitting payment', error);
      });
  };

  const token = localStorage.getItem("jwtToken");
  if (token === null) {
    navigate("/");
  }

  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div id='payment'>
    <div className='payment-container'>
      <h1>PAYMENT DETAILS</h1>
      <div>
        <h2>Booked Details</h2>
        <p>Event Name: {event.event}</p>
        <p>Price: Rs {event.price}</p>
        <p>Date: {event.date}</p>
        <p>Venue: {event.venue}</p>
      </div>

      <div>
        <h2>Enter Your Payment Details</h2>
        <form onSubmit={handlePayment}>
          <label>
            Name:
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Card Type:
            <input type="text" value={cardType} placeholder="Card Type" onChange={(e) => setCardType(e.target.value)} />
          </label>
          <br />
          <label>
            Card Number:
            <input type="text" value={cardNumber} placeholder="Card Number" onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <br />
          <label>
            Expiration Date:
            <input type="text" value={expireDate} placeholder="Expiration Date" onChange={(e) => setExpireDate(e.target.value)} />
          </label>
          <br />
          <label>
            CVV:
            <input type="password" value={cvv} placeholder="CVV" onChange={(e) => setCVV(e.target.value)} />
          </label>
          <br />
          <button type="submit">Make Payment</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Payment;
