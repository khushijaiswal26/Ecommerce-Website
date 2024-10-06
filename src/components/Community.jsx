import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <section className="community">
      <div className="community-content">
        <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p>Type your email down below and be young wild generation</p>
        <div className="subscription-form">
          <input 
            type="email" 
            placeholder="Add your email here" 
            className="email-input"
          />
          <button className="send-button">SEND</button>
        </div>
      </div>
    </section>
  );
};

export default Community;