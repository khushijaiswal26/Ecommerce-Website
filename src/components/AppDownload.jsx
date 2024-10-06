import React from 'react';
import './AppDownload.css';
import appstore from "../assets/png-transparent-apple-store-logo-app-store-android-google-play-get-started-now-button-text-logo-black-thumbnail.png";
import googlestore from "../assets/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo-thumbnail.png";
import phonepreview from "../assets/food-instagram-story-concept.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="download-content">
        <h2>DOWNLOAD THE APP & GET THE VOUCHER!</h2>
        <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
        <div className="store-buttons">
          <a href="#" className="store-button">
            <img src={appstore} alt="App Store" />
          </a>
          <a href="#" className="store-button">
            <img src={googlestore} alt="Google Play" />
          </a>
        </div>
      </div>
      <div className="app-preview">
        <img src={phonepreview} alt="Mobile app preview" />
      </div>
    </section>
  );
};

export default AppDownload;