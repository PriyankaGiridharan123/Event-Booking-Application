import React from 'react';
import './footer.css'; 
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">privacy</a></li>
              <li><a href="/policy">policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="/FAQ">FAQ</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
            <a className="text-white" href="https://instagram.com/jaketren">
            <BsInstagram className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://linkedin.com/jaketrent">
            <BsLinkedin className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://www.youtube.com/jaketrent">
            <BsYoutube className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://facebook.com/jaketrent">
            <BsFacebook className="text-white fs-4" />
          </a>
            </div>
          </div>
        </div>
        <small>All content &copy;Unplugged Events. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
