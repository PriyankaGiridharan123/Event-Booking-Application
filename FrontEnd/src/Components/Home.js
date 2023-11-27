import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className='home'>
      <header>
        <a href="#" className="logo1">
          <strong><em>Unplugged Events</em></strong>
        </a>
        <nav>
          <ul>
            <li><Link to="/userlogin">Login</Link></li>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/adminlogin">Admin Login</a></li>
          </ul>      
        </nav>
      </header>
      <section>
        <h1>Welcome to <em>Unplugged Events</em></h1>
        <p>We're thrilled to have you here at <em><strong>Unplugged Events</strong></em>, where organizing and hosting events has never been easier.

        Are you ready to embark on a journey that will simplify event planning, streamline registration, and enhance your attendees' experience? You're in the right place!
        
        With our cutting-edge platform, you'll discover a world of possibilities to create memorable and successful events. Whether you're a seasoned event pro or just getting started, we've got the tools and features to make your events stand out.
        
        Join our community of event enthusiasts, and let's make your vision come to life. Let's get started!"</p>
      <Link to="/userregister"> <input type="submit" id="submitt" value="SIGN UP HERE" /></Link> 
      </section>
      
      <footer class="footer-section">
      <div class="container">
          <div class="footer-cta pt-5 pb-5">
              <div class="row">
                  <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                          <i class="fas fa-map-marker-alt"></i>
                          <div class="cta-text">
                              <h4>Find us</h4>
                              <span>1010 Avenue, sw 54321, chandigarh</span>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                          <i class="fas fa-phone"></i>
                          <div class="cta-text">
                              <h4>Call us</h4>
                              <span>9876543210 0</span>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                          <i class="far fa-envelope-open"></i>
                          <div class="cta-text">
                              <h4>Mail us</h4>
                              <span>mail@info.com</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-content pt-5 pb-5">
              <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-50">
                      <div class="footer-widget">
                          <div class="footer-logo">
                             
                          </div>
                          <div class="footer-social-icon">
                              <span>Follow us</span>
                              <a href="https://www.facebook.com/"><i class="fab fa-facebook-f facebook-bg">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uiHjt4Bj4ZlqwYkYFe1eYvz6APcbffXibg&usqp=CAU" width="50px"></img></i></a>
                              <a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter twitter-bg">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEj_Iduki2sBLDsdtBzfaWj4K6U8PDeutHm9w2VdCOI6MNAVkvRHGBmCU6zYXVHkoDFpY&usqp=CAU " width="50px">
                              </img></i></a>
                              <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Useful Links</h3>
                          </div>
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="/about">About us</a></li>
                              <li><a href="#">Contact us</a></li>
                              <li><a href="#">Latest News</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                      <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Subscribe</h3>
                          </div>
                          <div class="footer-text mb-25">
                              <p>Don’t miss to subscribe to our new feeds.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="copyright-area">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                      <div class="copyright-text">
                          <p>Copyright &copy; 2018, All Right Reserved</p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                      <div class="footer-menu">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="/terms">Terms</a></li>
                              <li><a href="/privacy">Privacy</a></li>
                              <li><a href="/policy">Policy</a></li>
                              <li><a href="/FAQ">FAQ's</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  </div>

    
  );
}

export default Home;
