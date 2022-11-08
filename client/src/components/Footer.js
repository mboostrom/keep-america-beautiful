import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
      <div className="footer-left">
        <div className="logo-green"></div>
        <div className="socials">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="white" className="fa-icon" />
          <FontAwesomeIcon icon={faFacebookF} size="sm" color="white" className="fa-icon" />
          <FontAwesomeIcon icon={faTwitter} size="lg" color="white" className="fa-icon" />
          <FontAwesomeIcon icon={faInstagram} size="lg" color="white" className="fa-icon" />
          <FontAwesomeIcon icon={faYoutube} size="lg" color="white" className="fa-icon" />
        </div>
      </div>
      <div className="footer-middle">
        <ul className="footer-menu">
          <li>ABOUT</li>
          <li>ADVOCACY</li>
          <li>EVENTS</li>
          <li>RESOURCES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="footer-right">
        <p className="form-big">STAY IN TOUCH</p>
        <p>Sign up for our newsletter to stay up-to-date<br />with everything happening around the<br />country and in your community.</p>
        <div className="footer-form">
          <div className="form-name">
            <p>First Name<span className="asterisk">*</span></p>
            <p>Last Name<span className="asterisk">*</span></p>
          </div>
          <p>Email<span className="asterisk">*</span></p>
          <p>Zip Code<span className="asterisk">*</span></p>
        </div>
        <p className="form-big">CAPTCHA</p>
        <div className="captcha"></div>
        <div className="submit">
          <p>SUBMIT</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
