// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Upcoming.css';
// import { Link, useNavigate } from 'react-router-dom';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/event/events')
//       .then((response) => {
//         setEvents(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching events', error);
//       });
//   }, []);

//   const nav = useNavigate();
//   const token = localStorage.getItem("jwtToken");
//   if (token === null) {
//     nav("/");
//   }

//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
//   }, []);

//   const handleConfirmBooking = (event) => {
//     const confirmMessage = `You are booking: ${event.event} on ${event.date} for Rs ${event.price}. Confirm?`;
//     if (window.confirm(confirmMessage)) {
//       window.location.href = `/payment/${event.id}`;
//     }
//   };

//   return (
//     <div className="upcoming">
//     <h1>UNPLUGGED EVENTS</h1>
//       <h1>Upcoming Events</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Event Name</th>
//             <th>Price</th>
//             <th>Date</th>
//             <th>Venue & Time</th>
//             <th>Available Ticket</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td>{event.event}</td>
//               <td>{event.price}</td>
//               <td>{event.date}</td>
//               <td>{event.venue}</td>
//               <td>{event.available}</td>
//               <td>
//                 <button className="book-button" onClick={() => handleConfirmBooking(event)}>
//                   Book
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UpcomingEvents;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Upcoming.css';
import { Link, useNavigate } from 'react-router-dom';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/event/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events', error);
      });
  }, []);

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

  const handleConfirmBooking = (event) => {
    const confirmMessage = `You are booking: ${event.event} on ${event.date} for Rs ${event.price}. Confirm?`;
    if (window.confirm(confirmMessage)) {
      // Make an API call to decrement the available ticket count
      axios.put(`http://localhost:8080/event/${event.id}/decrement`)
        .then((response) => {
          // If the API call is successful, redirect to the payment page
          window.location.href = `/payment/${event.id}`;
        })
        .catch((error) => {
          console.error('Error decrementing available ticket count', error);
        });
    }
  };

  return (
    <div className="upcoming">
      <h1>UNPLUGGED EVENTS</h1>
      <h1>Upcoming Events</h1>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Venue & Time</th>
            <th>Available Ticket</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.event}</td>
              <td>{event.price}</td>
              <td>{event.date}</td>
              <td>{event.venue}</td>
              <td>{event.available}</td>
              <td>
                <button className="book-button" onClick={() => handleConfirmBooking(event)}>
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingEvents;
