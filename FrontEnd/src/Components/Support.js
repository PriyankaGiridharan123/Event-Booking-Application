import React from 'react';
import './Support.css';
const Support = () => {
  return (
    <section className="support-page">
      <h1>Support - UNPLUGGED EVENTS</h1>
      <ul className="row">
        <li className="support-inh">
        <a href='/FAQ'>
          <img
            src="https://img.freepik.com/premium-photo/business-man-hand-holding-wooden-cube-with-faq-text_42256-1160.jpg"
            alt=""
          /></a>
          <h3>FAQ</h3>
          <p>
            Find the most commonly asked questions here.
          </p>
        </li>
        <li className="support-inh">
        <a href='/privacy'>
          <img
            src="https://img.freepik.com/premium-vector/personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-flat-vector-illustration-banner-protection_128772-874.jpg"
            alt=""
          /></a>
          <h3>Privacy and Policy</h3>
          <p>
            Check all the privacy and policies before booking any events.
          </p>
        </li>
        <li className="support-inh">
        <a href='/contact'>
          <img
            src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
            alt="Foto van een waterval."
          /></a>
          <h3>Contact Us</h3>
          <p>
            Need help? Contact us and clarify your doubts.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Support;
