import React from 'react';
import '../styles/LandingPageHowItWorksStyle.css';
import { TbCoinFilled } from "react-icons/tb";
import { FaCar } from 'react-icons/fa';
import { BsChatTextFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

const LandingPageHowItWorks = () => {
  return (
    <div id="how-it-works" className="howItWorksContainer">
      <h1 className="howItWorksHeading">How it works</h1>
      <p className="howItWorksSubheading">
        We get it! The cost of getting services done is high, and this can be nerve
        racking. Take the financial burden off you in these 3 easy steps:
      </p>

      <div className="howItWorksCards">
        <div className="howItWorksCard">
          <TiLocation className="cardIcon" />
          <h2 className="cardHeading">Search or Post</h2>
          <p className="cardSubheading">Browse for a service and filter by price, location, and other preferences, or simply post your own request for a skill or service.</p>
        </div>

        <div className="howItWorksCard">
          <BsChatTextFill className="cardIcon" />
          <h2 className="cardHeading">Chat and Accept</h2>
          <p className="cardSubheading">Check reviews, explore experience, and chat with service providers. Negotiate the skill currency, finalize details, and agree on terms.</p>
        </div>

        <div className="howItWorksCard">
          <TbCoinFilled className="cardIcon" />
          <h2 className="cardHeading">Complete, Earn, and Spend</h2>
          <p className="cardSubheading">Complete the task to earn skill coins. Use your earned currency to request other services or skills of your choice. It’s that simple!</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHowItWorks;
