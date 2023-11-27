import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I book a ticket using the app?',
      answer: 'To book a ticket, open the app, select your wanted event, choose your preferred seat or ticket type, and proceed to payment.',
    },
    {
      question: 'What payment methods are accepted in the app?',
      answer: 'Typically, ticket booking apps accept credit/debit cards, digital wallets (e.g., Rupay,Mastercard,Visa), and sometimes cash payments at physical locations.',
    },
    {
      question: ' How do I provide feedback or report issues with the app?',
      answer: 'Most apps have a feedback or customer support section where you can report issues, provide feedback, or seek assistance.',
    },
    {
        question: ' Can I use the app to check real-time schedules and availability?',
        answer: 'Yes, ticket booking apps often provide real-time information on schedules, seat availability, and prices.',
      },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-page">
      <div className="faq-heading">
        <h1>FAQ'S</h1>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h1 className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
              {item.question}
            </h1>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
  
    </div>
   
  );
};

export default FAQ;
