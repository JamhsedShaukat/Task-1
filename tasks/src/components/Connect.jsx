import React from "react";
import "./Connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// import laptopScreen from "/images/laptop-screen.png"; // Replace with the correct path to your image

const Connect = () => {
  return (
    <div className="main">
      <div className="row">
        <h1 className="heading-connect">
          Connect & Convert: Elevate Your <b className="gradient">B2B</b> <br />
          Email <b className="gradient">Marketing</b> Strategy
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Illo libero soluta commodi saepe similique esse?
        </p>
        <button className="get-app-button get-started">Get Started</button>

        <div className="lower-section">
          <div className="icon gmail-icon">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </div>

          <div className="center">
            <div className="icon fb-icon">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </div>
            <div className="laptop-screen">
              <img src="/images/laptop-screen.png" alt="Laptop Screen" />
            </div>
            <div className="icon linkedin-icon">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
