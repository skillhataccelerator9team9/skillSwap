import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OnBoardingStyle.css';
import onBoardingImage1 from '../assets/onBoardingImage1.jpeg';
import onBoardingImage2 from '../assets/onBoardingImage2.jpeg';
import onBoardingImage3 from '../assets/onBoardingImage3.jpeg';

const OnBoarding = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPhase === 1) {
      const timer = setTimeout(() => {
        setCurrentPhase(2);
      }, 2000); // Move to the next phase after 3 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [currentPhase]);

  const handleNextPhase = () => {
    if (currentPhase === 4) {
      navigate('/loginPage'); // Navigate to login page when in Phase 4
    } else {
      setCurrentPhase(currentPhase + 1); // Move to the next phase
    }
  };

  return (
    <div className={`onboarding-container phase-${currentPhase}`}>
      {currentPhase === 1 && (
        <div className="phase-one">
          <div className="skilltopia-text">Skilltopia</div>
          <div className="loading-circle"></div>
        </div>
      )}
      {currentPhase === 2 && (
        <div className="phase-two">
          <div className="image-container">
            <img src={onBoardingImage1} alt="Onboarding Phase 2" />
          </div>
          <div className="text-frame">
            <div className="text">
              Discover and join a vibrant community of skilled individuals.
              Request or offer a service to kick off your journey, all for free!
            </div>
            <div className="dots"></div>
            <button className="next-button" onClick={handleNextPhase}>Continue</button>
          </div>
        </div>
      )}
      {currentPhase === 3 && (
        <div className="phase-three">
          <div className="image-container">
            <img src={onBoardingImage2} alt="Onboarding Phase 3" />
          </div>
          <div className="text-frame">
            <div className="text">
              Chat securely with service providers or receivers,
              discuss and agree on service details,
              all within our platform for your peace of mind.
            </div>
            <div className="dots"></div>
            <button className="next-button" onClick={handleNextPhase}>Continue</button>
          </div>
        </div>
      )}
      {currentPhase === 4 && (
        <div className="phase-four">
          <div className="image-container">
            <img src={onBoardingImage3} alt="Onboarding Phase 4" />
          </div>
          <div className="text-frame">
            <div className="text">
              Complete the transactions and review your experience to
              boost your profile within the community.
              Your feedback ensures transparency for future users.
            </div>
            <div className="dots"></div>
            <button className="next-button" onClick={handleNextPhase}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnBoarding;
