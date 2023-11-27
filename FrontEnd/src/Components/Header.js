import React from 'react';
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="site-header">
    <div className='header-container'>
      <nav>
        <Link to="/"><strong>UNPLUGGED |</strong></Link>
        <Link to="/userlogin">Login</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/support">Support</Link>
        <Link to="/adminlogin">Admin Login</Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
