
import React from 'react'

import LandingPageNavBar from '../components/LandingPageNavBar';
import LandingPageBanner from '../components/LandingPageBanner';
import LandingPageAboutUs from '../components/LandingPageAboutUs';
import LandingPageMostPolpularSkills from '../components/LandingPageMostPopularSkills';
import LandingPageFooter from '../components/LandingPageFooter';

function LandingPage () {
  return (
    <div className='LandingPage'>
      <LandingPageNavBar />
      <LandingPageBanner />
      <LandingPageAboutUs />
      <LandingPageMostPolpularSkills />

      <LandingPageFooter />
    </div>
  )
}

export default LandingPage;