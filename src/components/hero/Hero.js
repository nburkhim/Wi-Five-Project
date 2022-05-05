import React from "react";
import "./hero.scss";
import { images } from "../../images";
import { Link } from 'react-router-dom';
import "../../scss/main.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="right-top-image">
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h1 className="title1">
              Welcome <br /> to Wi-Five
            </h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="hero_btn"><Link to={'/Map'} >VIEW MAP</Link></button>
          </div>
          <div className="hero__image">
            <picture>
              <source media="(max-width:767px" srcSet={images.intro_mobile} />
              <img className="map-picture" src={images.intro_desktop} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
