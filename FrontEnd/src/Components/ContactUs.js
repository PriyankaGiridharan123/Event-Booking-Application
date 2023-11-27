import React from 'react';
import './ContactUs.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <section>
    <div className='contact-container'>
      <div className="section-header">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
          Our UNPLUGGED EVENTS are here to assist you in any way we can. Whether you have questions about an event,
          need help with ticketing, or just want to share your feedback, we're ready to listen.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home"></i>
              </div>

              <div className="contact-info-content">
                <h4>Address</h4>
                <p>
                  09/28 Teachers Colony,<br /> Anna Nagar, Chennai, <br />640340
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>770-871-6338</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="contact-info-content">
                <h4>Email</h4>
                <p>pri@gmail.com</p>
                <p>yash@gmail.com</p>
                <p>vas@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="" id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" required name="" />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="email" required name="" />
                <span>Email</span>
              </div>

              <div className="input-box">
                <textarea required name=""></textarea>
                <span>Type your Message...</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
