import React from 'react';
import '../styles/LandingPageWhyChooseUsStyle.css';
import image1 from '../assets/whyChooseUsImage1.jpeg'; // Placeholder for the actual image

import { BiSolidDollarCircle } from "react-icons/bi";
import { SiTrustpilot } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";

const LandingPageWhyChooseUs = () => {
  const rowsData = [
    {
      icon: <BiSolidDollarCircle />,
      header: 'Save Money',
      subheader: 'Trade your skills instead of spending cash on services. Gain access to what you need without financial barriers.',
    },
    {
      icon: < SiTrustpilot />,
      header: 'Build Trust',
      subheader: 'Verified profiles, ratings, and reviews ensure you connect with reliable and skilled individuals.',
    },
    {
      icon: <FaHandshake />,
      header: 'Connect With Skilled People',
      subheader: 'Our platform  helps connect with the right person, at the right time, for the skills you need.',
    },
    {
      icon: <RiCommunityFill />,
      header: 'Community- Driven',
      subheader: 'Join a supportive community where skills are valued, and connections thrive.',
    },
    {
      icon: <GiGrowth />,
      header: 'Grow Your Skills',
      subheader: 'Learn, teach, and expand your abilities while helping others.',
    },
  ];

  return (
    <div className="whyChooseUsContainer">
      <h1 className="whyChooseUsHeader">Why choose us</h1>
      <p className="whyChooseUsSubheader">
        Lorem ipsum dolor sit amet consectetur. Integer consequat ipsum nam eget turpis morbi. A turpis nunc est etiam in sed aenean.
      </p>

      <div className="whyChooseUsContent">
        {/* Left column: Image */}
        <div className="leftColumn">
          <img src={image1} alt="Why Choose Us" className="imageStyle" />
        </div>

        {/* Right column: Rows of icons, headers, and subheaders */}
        <div className="rightColumn">
          {rowsData.map((row, index) => (
            <div className="row" key={index}>
              <div className="icon">{row.icon}</div>
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
