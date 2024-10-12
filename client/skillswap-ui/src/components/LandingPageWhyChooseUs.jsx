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
      icon_: <FaSackDollar />,
      header: 'Save Money',
      subheader: 'Trade your skills instead of spending cash on services. Gain access to what you need without financial barriers.',
    },
    {
      icon_: < SiTrustpilot />,
      header: 'Build Trust',
      subheader: 'Verified profiles, ratings, and reviews ensure you connect with reliable and skilled individuals.',
    },
    {
      icon_: <FaHandshake />,
      header: 'Connect With Skilled People',
      subheader: 'Our platform  helps connect with the right person, at the right time, for the skills you need.',
    },
    {
      icon_: <RiCommunityFill />,
      header: 'Community- Driven',
      subheader: 'Join a supportive community where skills are valued, and connections thrive.',
    },
    {
      icon_: <GiGrowth />,
      header: 'Grow Your Skills',
      subheader: 'Learn, teach, and expand your abilities while helping others.',
    },
  ];

  return (
    <div id="why-choose-us" className="whyChooseUsContainer">
      <h1 className="whyChooseUsHeader">Why choose us</h1>
      <p className="whyChooseUsSubheader">
        Lorem ipsum dolor sit amet consectetur. Integer consequat ipsum nam eget turpis morbi. A turpis nunc est etiam in sed aenean.
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
