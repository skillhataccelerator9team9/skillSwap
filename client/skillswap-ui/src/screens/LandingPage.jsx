
import React from 'react'

import LandingPageNavBar from '../components/LandingPageNavBar';
import LandingPageBanner from '../components/LandingPageBanner';
import LandingPageAboutUs from '../components/LandingPageAboutUs';
import LandingPageMostPolpularSkills from '../components/LandingPageMostPopularSkills';

function LandingPage () {
  return (
    <div className='LandingPage'>
      <LandingPageNavBar />
      <LandingPageBanner />
      <LandingPageAboutUs />
      <LandingPageMostPolpularSkills />
    </div>
  )
}

export default LandingPage;