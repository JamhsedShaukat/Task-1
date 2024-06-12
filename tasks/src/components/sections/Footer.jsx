import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <div className="col">
            <img src="/images/logo.png" alt="logo" />
            <p>Bring a best development experience to designers and developers by offer the tools needed for having a quicks and most web projects.</p>
        </div>
        <div className="col">
            <h3>About Company</h3>
            <div className="link">
            <div className="link-left">
                <ul>
                <li> <a href="#">Services</a></li>
                <li> <a href="#">Pricing</a></li>
                <li> <a href="#">Contact</a></li>
                <li> <a href="#">Caressrs</a></li>
                </ul>
            </div>
            <div className="link-right">
            <ul>
                <li> <a href="#"> Works</a></li>
                <li> <a href="#">Resources </a></li>
                <li> <a href="#">News </a></li>
                <li> <a href="#">Privacy Policy </a></li>
                </ul>
            </div>
            </div>
            
        </div>
        <div className="col">
            <h3>Account</h3>
            <ul>
            <li> <a href="#">Profile</a></li>
            <li> <a href="#">Setting </a> </li>
            <li> <a href="#">Billing </a> </li>
            <li> <a href="#">Notifications</a> </li>
            </ul>
           
        </div>
        <div className="col">
            <h3>Get in Touch</h3>
            <div className='get-box'>
                <p><FontAwesomeIcon icon={faClock} className="footer-icons" />Sun-Fri:  9:00-5:00</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="footer-icons"/>info@example.com</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} className="footer-icons"/>0834 3849 9200</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icons"/>16/A New York, USA</p>
            </div>
        </div>
    </div>
    <div className="social-media-icons-container">
        <hr />
        <div className="social-icons">
    <FontAwesomeIcon icon={faFacebook} className="social-footer-icons" />
    <FontAwesomeIcon icon={faGlobe} className="social-footer-icons" />
    <FontAwesomeIcon icon={faGithub} className="social-footer-icons" />
    <FontAwesomeIcon icon={faTwitter} className="social-footer-icons" />
    </div>
    </div>
    </>

  )
}

export default Footer