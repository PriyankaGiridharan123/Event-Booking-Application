
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [event, setEvent] = useState(null);
  const [payments, setPayments] = useState([]);
  const { id } = useParams();

  const fetchEventDetails = () => {
    axios.get("http://localhost:8080/event/events")
      .then((eventResponse) => {
        console.log('Event Data:', eventResponse.data);
        setEvent(eventResponse.data);
      })
      .catch((eventError) => {
        console.error('Error fetching event details', eventError);
      });
  }

  useEffect(() => {
    fetchEventDetails();
    axios.get(`http://localhost:8080/userside/getpayment`)
      .then((paymentResponse) => {
        setPayments(paymentResponse.data);
      })
      .catch((paymentError) => {
        console.error('Error fetching payment details', paymentError);
      });
  }, [id]);

  return (
    <div className='admin-page-container'>
      <h1>Admin Dashboard</h1>
      <h2>Ticket Booked & Payment Details</h2>
      <table>
        <thead>
          <tr>
          <th>Event Id</th>
          <th>Event Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Card Type</th>
            <th>Card Number</th>
            <th>Expire Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
            <td>{payment.eventid}</td>
            <td>{payment.eventName}</td>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td>{payment.cardType}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.expireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;

