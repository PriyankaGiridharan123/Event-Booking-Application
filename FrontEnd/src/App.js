import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'; 
import { Helmet } from 'react-helmet';

import Login from './Components/Login';
import Register from './Components/Register';

import Navbar from './Components/Navbar';
import Feedback from './Components/Feedback';
import About from './Components/About';
import Selection from './Components/Selection';
import Support from './Components/Support';
import Terms from './Components/Terms';
import PrivacyPolicy from './Components/PrivacyPolicy';
import FAQ from './Components/FAQ';

import AdminLogin from './Components/AdminLogin';
import AdminNavbar from './Components/AdminNavbar';
import CreateEvent from './Components/CreateEvent';
import ViewEvent from './Components/ViewEvent';
import AdminFeedback from './Components/AdminFeed';

import Homee from './Components/Homeeee';
import UpcomingEvents from './Components/UpcomingEvents';
import EventDetail from './Components/EventDetails';

import Payment from './Components/Payment';
import AdminPage from './Components/AdminPage';
import Contact from './Components/ContactUs';

function App() {

  return (
    <>
      <div className="App">
      <Helmet>
        <title>Unplugged</title>
      </Helmet>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Homee />} />
            <Route path="/userlogin" element={<Login />} />
            <Route path="/userregister" element={<Register />} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/policy" element={<PrivacyPolicy/>} />
            <Route path="/FAQ" element={<FAQ/>} />
            <Route path="/dashboard" element={<AdminNavbar/>} />
            <Route path="/createevent" element={<CreateEvent/>} />
            <Route path="/update/:id" element ={<CreateEvent />}/>
            <Route path="/viewevent" element={<ViewEvent/>} />
            <Route path="/userdashboard" element={<Navbar/>} />
            <Route path="/upcomingevents" element={<UpcomingEvents/>} />
            <Route path="/events/:id" element={<EventDetail/>} />
            <Route path="/payment/:id" element={<Payment/>} />
            <Route path="/feedback" element={<Feedback/>} />
            <Route path="/viewfeed" element={<AdminFeedback/>} />
            <Route path="/paymentdetails" element={<AdminPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/support" element={<Support/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  );
}

export default App;
