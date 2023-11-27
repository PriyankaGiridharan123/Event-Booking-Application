import React from 'react';
import './Terms.css'; 
import { Link } from "react-router-dom";
function Terms() {
  return (
    <div className='my-terms-container'>
    <div className="termsAndConditions fadeIn">
      <h1 className="termsAndConditionsHeading">Terms and Conditions</h1>
      <h3 className="spangleWelcome">Welcome to Unplugged Events</h3>
      <p className="termsParagraphIntro">
      Welcome to UNPLUGGED EVENTS! Before using our services, please read these Terms and Conditions carefully. 
      By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services. <br /><br />
        Would appreciate you visiting www.unplugged.com  for further more informations.</p>
        
      
      <div className="serviceLeadingSection">
        <h2><span className="sn blue">1.</span><span className="st blue">Acceptance of Terms</span></h2>
        <p className="spl">By using our online event ticketing platform, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions.</p>
      </div>
      <div className="serviceLeadingSection">
        <h2><span className="sn orange">2.</span><span className="st orange">User Responsibilities</span></h2>
        <p className="spl">The context of terms and conditions, refer to the actions and behaviors expected from individuals using a website, service, or platform. 
        These responsibilities typically include providing accurate information, complying with applicable laws and regulations, maintaining account security, engaging in respectful behavior, and adhering to the platform's rules and guidelines. User responsibilities help create a safe and fair environment for all users and are outlined to ensure compliance with terms and conditions.</p>
       
      </div>
      <div className="serviceLeadingSection">
        <h2><span className="sn lightGreen">3.</span><span className="st lightGreen">Privacy Policy</span></h2>
        <p className="spl">"Our app is committed to safeguarding your privacy. We collect minimal personal and device information to provide our services and improve your experience. 
        Your data is not shared with third parties except for essential purposes, such as analytics or to fulfill legal requirements. We take security seriously, employing encryption and secure practices to protect your information. You have the right to access, correct, or delete your data, and we'll keep you informed of any policy changes. If you have questions or concerns, please contact us."</p>
        
      </div>
      <div className="serviceLeadingSection">
        <h2><span className="sn purple">4.</span><span className="st purple">Prohibited Activities</span></h2>
        <p className="spl">"Prohibited activities on our app include any form of harassment, hate speech, illegal content sharing, fraudulent behavior, spamming, unauthorized access attempts, or violations of intellectual property rights. 
        Users are expected to adhere to our community guidelines, respect others, and use the app for its intended purpose. Engaging in any of these prohibited activities may result in account suspension or termination."</p>
      </div>
      <Link to="/">
      <h4 className="closeTerms">CLOSE TERMS AND CONDITIONS</h4></Link>
    </div>
    </div>
  );
}

export default Terms;