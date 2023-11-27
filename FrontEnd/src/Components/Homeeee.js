import React from 'react';
import Header from './Header';
import './Homeee.css';
import './Header.css';
import { Link } from "react-router-dom";
import Footer from './footer';
function Homee() {
  return (
    <div className="specific-div">
    <div className="wrapper">
    <div className="header-container"> 
    <Header />
  </div>
      <main>
        <div className="home-page">
          <div className="block">
            <h1>Hey Welcome to </h1>
            <h1>UNPLUGGED EVENTS!</h1>
            <p className="intro"><p>We're thrilled to have you here at <em><strong>Unplugged Events</strong></em>, where organizing and hosting events has never been easier.
            Are you ready to embark on a journey that will simplify event planning, streamline registration, and enhance your attendees' experience? You're in the right place! 
            Whether you're a seasoned event pro or just getting started, we've got the tools and features to make your events stand out.
            Let's make your vision come to life. Let's get started!"</p></p>
            <Link to="/userregister" className="button">SIGN UP FOR FREE!</Link>
          </div>
          <div className='content-container'>
          <div className="block">
            <img src="https://media4.giphy.com/media/FJaKqj9YG8cw6FeW8b/giphy.gif?cid=ecf05e478s2jt4nv6t0jd5yaph8s41qbgtrj3d2xn5ys4ic3&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="An illustration of me in profile" className='right-image'/>
          </div>
          </div>
        </div>
      </main>
  <Footer/>
    </div>
    </div>
  );
}

export default Homee;
