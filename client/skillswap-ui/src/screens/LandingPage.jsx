
import React from 'react'

import LandingPageNavBar from '../components/LandingPageNavBar';
import LandingPageBanner from '../components/LandingPageBanner';

function LandingPage () {
  return (
    <div className='LandingPage'>
      <LandingPageNavBar />
      <LandingPageBanner />
    </div>
  )
}

export default LandingPage;