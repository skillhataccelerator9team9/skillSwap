
import React from 'react'

import LandingPageNavBar from '../components/LandingPageNavBar';
import LandingPageBanner from '../components/LandingPageBanner';
import LandingPageAboutUs from '../components/LandingPageAboutUs';

function LandingPage () {
  return (
    <div className='LandingPage'>
      <LandingPageNavBar />
      <LandingPageBanner />
      <LandingPageAboutUs />
    </div>
  )
}

export default LandingPage;