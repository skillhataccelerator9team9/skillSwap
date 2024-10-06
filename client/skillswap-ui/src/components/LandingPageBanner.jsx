import React from 'react'
import '../styles/LandingPageBannerStyle.css'

const LandingPageBanner = () => {
  return (
    <section className='banner'>
      <div className="secContainer container">
        <div className="bannerText">
          <h5>Trade Skills</h5>
          <h1 className="title">
            Skilltopia Where your <span> Skills </span> Are Your <span>Currency</span>
          </h1>
          <p className="subTitle">
            Save money. Bulid connection. Trade your skills.
          </p>

          <div className="navButton">
            <button
              className="btn btn1"
              type="submit"
            >
              Join Our Waitlist
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LandingPageBanner