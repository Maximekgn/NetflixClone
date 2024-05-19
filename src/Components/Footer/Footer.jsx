import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src= {instagramIcon} />
        <img src= {youtubeIcon} />
        <img src= {twitterIcon} />
        <img src= {facebookIcon} />
      </div>
      <ul>
        <li>Audio Descriptio</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>

      </ul>
      <p className="copyrights-text">
        © 1997-2024 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer