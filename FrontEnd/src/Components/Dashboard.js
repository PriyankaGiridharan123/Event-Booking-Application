import React, { useState } from 'react';
import './Dashboard.css';
const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setShowModal(true);
    setModalContent(content);
    document.body.classList.add('prevent-background-scroll');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('prevent-background-scroll');
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className='dashboard-container'>
      <section id="intro">
        <div className="info">
          <h1>Unplugged Events</h1>
          <p>
          We're thrilled to have you here at <em><strong>Unplugged Events</strong></em>, where organizing and hosting events has never been easier.
          Are you ready to embark on a journey that will simplify event planning, streamline registration, and enhance your attendees' experience? You're in the right place! 
          Whether you're a seasoned event pro or just getting started, we've got the tools and features to make your events stand out.
          </p>
          <a href="#content" className="button explore">
           <h2> Explore</h2>
          </a>
        </div>
        <div className="split">
          <img
            className="explore"
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="img 1"
          />
          <img
            className="explore"
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="img 2"
          />
          <img
            className="explore"
            src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"
            alt="img 3"
          />
        </div>
      </section>

      <section id="content">
        <div className="card" onClick={() => openModal('ARR')}>
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="ARR"
          />
          <div className="title">
            <h2>ARR CONCERT</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('ARR')} data-modal="modal1">
              <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>

        <div className="card" onClick={() => openModal('CRICKET')}>
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D"
            alt="CRICKET"
          />
          <div className="title">
            <h2>CRICKET TOURNAMENT</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('CRICKET')} data-modal="modal2">
            <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>
        
        <div className="card" onClick={() => openModal('YUVAN')}>
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"
            alt="YUVAN"
          />
          <div className="title">
            <h2>YUVAN CONCERT</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('YUVAN')} data-modal="modal2">
            <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>

        

        <div className="card" onClick={() => openModal('BALL')}>
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
            alt="BALL"
          />
          <div className="title">
            <h2>BASKETBALL TOURNAMENT</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('BALL')} data-modal="modal3">
            <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>

        <div className="card" onClick={() => openModal('AI')}>
          <img
            className="card-img"
            src="https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.webp?b=1&s=170667a&w=0&k=20&c=EfDGOXh9kpMuzWRVVyogKHHmC8seeryg85ELWLxMcZQ="
            alt="AI"
          />
          <div className="title">
            <h2>CONFERENECE ON AI&DS</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('AI')} data-modal="modal1">
              <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>

        <div className="card" onClick={() => openModal('Delicious Pretzels')}>
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Delicious Pretzels"
          />
          <div className="title">
            <h2>VIJAY ANTONY CONCERT</h2>
          </div>
          <div className="more">
            <button className="modal-open" onClick={() => openModal('Delicious Pretzels')} data-modal="modal3">
            <a href="/upcomingevents"><h1>more</h1></a>
              <ion-icon className="open-icon" name="open-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>
        
      </section>

      <footer>
        <p>
        Join us for an unforgettable online event booking experience ! Explore a world of entertainment, discover new talents, and make lasting memories. Secure your tickets now and be part of the excitement. 
        For inquiries and support, contact our team at www.Unplugged.com or call us at +91 770-871-6338.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
