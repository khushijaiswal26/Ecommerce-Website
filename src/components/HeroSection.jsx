import React from 'react';
import hnm from "../assets/h-m-logo.png";
import obey from "../assets/obey-logo.png";
import shopify from "../assets/shopify-logo.png";
import lacoste from "../assets/lacoste-logo-1.png";
import levis from "../assets/klipartz.com.png";
import amazon from "../assets/amazon-logo.png";
import herosec from "../assets/herosec-transformed.webp";

const HeroSection = () => {
  return (
    <div className="container">
      
      <div className="explore-section">
         
        <div className="sub-explore-section">
          <h1>
            <span className="letHighlight">LET'S</span><br/>EXPLORE<br/> <span className="highlight">UNIQUE</span><br/> CLOTHES.
          </h1>
          <p className="subtitle">
            Live for Influential and Innovative fashion!
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
       
        <img src={herosec} alt="model"/> 
      </div>
    
      <div className="brand-section">
        <img src={hnm} alt="H&M" />
        <img src={obey} alt="OBEY" />
        <img src={shopify} alt="Shopify" />
        <img src={lacoste} alt="Lacoste" />
        <img src={levis} alt="Levi's" />
        <img src={amazon} alt="Amazon" />
      </div>
    </div>
  );
};

export default HeroSection;
