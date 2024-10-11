
import React from 'react'

import LandingPageNavBar from '../components/LandingPageNavBar';
import LandingPageBanner from '../components/LandingPageBanner';
import LandingPageAboutUs from '../components/LandingPageAboutUs';
import LandingPageMostPolpularSkills from '../components/LandingPageMostPopularSkills';
import LandingPageHowItWorks from '../components/LandingPageHowItWorks';
import LandingPageWhyChooseUs from '../components/LandingPageWhyChooseUs';
import LandingPageCustomerFeedback from '../components/LandingPageCustomerFeedback';
import LandingPageFooter from '../components/LandingPageFooter';

function LandingPage () {
  return (
    <div className='LandingPage'>
      <LandingPageNavBar />
      <LandingPageBanner />
      <LandingPageAboutUs />
      <LandingPageMostPolpularSkills />
      <LandingPageHowItWorks />
      <LandingPageWhyChooseUs />
      <LandingPageCustomerFeedback />

      <LandingPageFooter />
    </div>
  )
}

export default LandingPage;