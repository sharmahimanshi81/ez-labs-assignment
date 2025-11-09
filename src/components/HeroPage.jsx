import React from "react";
import mandala from "../assets/mandala.png";
import logo from "../assets/image_ez.png";
import "./HeroPage.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* <nav className="navbar">
        <div className="brand">Varnan</div>
        <ul className="nav-links">
          <li>Services</li>
          <li>Their Stories</li>
          <li>Our Story</li>
          <li>Varnan</li>
        </ul>
      </nav> */}

      <div className="hero-content">
        <div className="left">
          <div className="mandala-wrapper">
            <img src={mandala} alt="Mandala" className="mandala" />
            <img src={logo} alt="V Films Logo" className="vfilms-logo" />
          </div>
        </div>

        <div className="right">
          <h1 className="main-heading">
            Varnan is where stories find their voice and form
          </h1>

          <h3 className="sub-heading">Films . Brands . Art</h3>

          <p className="description">
            Since 2009, V’ve been telling stories – stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way – by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
