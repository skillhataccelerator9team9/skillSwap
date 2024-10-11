import React from 'react';
import '../styles/LandingPageBannerStyle.css';
import bannerImage from '../assets/BannerPhoto.jpeg'; // Update the path to your image

const LandingPageBanner = () => {
  return (
    <section className='banner'>
      <div className="secContainer container">
        <div className="bannerText">
          <h5>Trade Skills</h5>
          <h1 className="title">
            Skilltopia, Where your <span> Skills </span> Are Your <span>Currency</span>
          </h1>
          <p className="subTitle">
            Save money. Build connections. Trade your skills.
          </p>

          <button className="banner-button">
            Join our Waitlist
          </button>
        </div>
        <div className="mainImage">
          <img src={bannerImage} alt="Banner" className="bannerImage" />
        </div>

      </div>
    </section>
  );
};

export default LandingPageBanner;
