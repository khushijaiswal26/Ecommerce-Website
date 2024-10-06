import React from 'react';
import './PaydaySale.css';
import img from "../assets/young-lady-pointing-right-side-while-holding-hand-mouth-oversized-hoodie-pants-looking-puzzled-front-view_transparent_Craiyon.png"

const PaydaySale = () => {
  return (
    <section className="payday-sale">

        <div className="sale-image">
        <img src={img} alt="Payday sale" />
        </div>
      <div className="sale-content">
        <h2>PAYDAY SALE NOW</h2>
        <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
        <p className="sale-date">1 Nov - 10 Nov 2024</p>
        <p className="terms">*Terms & Conditions apply</p>
        <button className="shop-now">SHOP NOW</button>
      </div>
      
    </section>
  );
};

export default PaydaySale;