import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
    <div className="about-section">
  <h1>About Us</h1>
  <p>
            At <b>UNPLUGGED EVENTS</b>, we believe in the power of bringing people together through unforgettable experiences. Whether it's a concert that gives you goosebumps, 
            a sports event that keeps you on the edge of your seat, or a cultural festival that sparks your curiosity – we're here to make sure you don't miss a moment.
            </p>
            <p>
            <h2>What Sets Us Apart?</h2>
            <h3>Diverse Events, One Platform:</h3>
            Discover a world of events all in one place. From concerts and sports to conferences and local meet-ups, we've got it covered.
            </p>
            <h2>1.Easy Ticketing</h2>
                <p>
                We've simplified the ticketing process so you can focus on the event, not the logistics. Secure, quick, and hassle-free – that's how we do ticketing.
                </p>
                <h2>2.Secure Payments</h2>
                <p>
                Your trust is our priority. Our secure payment system guarantees a worry-free ticket-buying experience.</p>
</div>

 <h1 style={{textAlign:'center'}}>Our Team</h1>
<div className="row">
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Priyanka</h2>
        <p className="title">Founder</p>
        <p>pri@example.com</p>
        <p><Link to='/contact'><button className="button">Contact</button></Link></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Yasvanth</h2>
        <p className="title">Event Organizer</p>
        <p>yash@example.com</p>
        <p><Link to='/contact'><button className="button">Contact</button></Link></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Vasanth</h2>
        <p className="title">Chairman</p>
        <p>vas@example.com</p>
        <p><Link to='/contact'><button className="button">Contact</button></Link></p>
      </div>
    </div>
  </div>
</div> 

    </div> 
    
  )
}

export default About