import React from 'react';

const HeroSection = () => {
  return (
    <div className="container">
      <div className="explore-section">
        <h1>
          <span className="letHighlight">LET'S</span>{'\n'}EXPLORE{'\n'} <span className="highlight">UNIQUE</span>{'\n'} CLOTHES.
        </h1>
        <p className="subtitle">
          Live for Influential and Innovative fashion!
        </p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="brand-section">
        <img src="/path-to-hm-logo.png" alt="H&M" />
        <img src="/path-to-obey-logo.png" alt="OBEY" />
        <img src="/path-to-shopify-logo.png" alt="Shopify" />
        <img src="/path-to-lacoste-logo.png" alt="Lacoste" />
        <img src="/path-to-levis-logo.png" alt="Levi's" />
        <img src="/path-to-amazon-logo.png" alt="Amazon" />
      </div>
    </div>
  );
};

export default HeroSection;
