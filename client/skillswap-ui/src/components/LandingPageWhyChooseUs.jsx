import React from 'react';
import '../styles/LandingPageWhyChooseUsStyle.css';
import image1 from '../assets/whyChooseUsImage1.jpeg'; // Placeholder for the actual image

import { FaSackDollar } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";

const LandingPageWhyChooseUs = () => {
  const rowsData = [
    {
      icon_: <FaHandshake />,
      header: 'Secured Chat',
      subheader: 'Communicate directly through the in-app chat. Using the app throughout your experience provides you a safe and scam-free transaction',
    },
    {
      icon_: <FaSackDollar />,
      header: 'Cash-Free Transactions',
      subheader: 'Pay for services with Skilltopia Coins only, saving cash while getting the help you need.',
    },
    // {
    //   icon_: < SiTrustpilot />,
    //   header: 'Build Trust',
    //   subheader: 'Verified profiles, ratings, and reviews ensure you connect with reliable and skilled individuals.',
    // },

    {
      icon_: <RiCommunityFill />,
      header: 'Community Building',
      subheader: 'Connect with skilled individuals nearby, schedule at your convenience, and grow your network.',
    },
    {
      icon_: <GiGrowth />,
      header: 'Grow Your Skills',
      subheader: 'Learn, teach, and expand your abilities while helping others.',
    },
  ];

  return (
    <div id="why-choose-us" className="whyChooseUsContainer">
      <h1 className="whyChooseUsHeader">Why Use Skilltopia</h1>
      <p className="whyChooseUsSubheader">

      </p>

      <div className="whyChooseUsContent">
        {/* Left column: Image */}
        <div className="leftColumn">
          <img src={image1} alt="Why Choose Us" />
        </div>

        {/* Right column: Rows of icons, headers, and subheaders */}
        <div className="rightColumn">
          {rowsData.map((row, index) => (
            <div className="row" key={index}>
              <div className="icon1">{row.icon_}</div>
              <div className="textContent">
                <h2 className="rowHeader">{row.header}</h2>
                <p className="rowSubheader">{row.subheader}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageWhyChooseUs;
