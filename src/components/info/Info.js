import React from "react";
import "./info.scss";
import { images } from "../../images";
const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container"></div>
        <h2 className="title1 title1--mod">Our Goals and Missions</h2>
        <div className="we-are-different__content">
          <div className="snappy">
            <img src={images.snappy_process} alt="" />
            <h3>Easy Process</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="affordable">
            <img src={images.affordable_prices} alt="" />
            <h3>Free of Cost</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="people">
            <img src={images.people_first} alt="" />
            <h3>Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
