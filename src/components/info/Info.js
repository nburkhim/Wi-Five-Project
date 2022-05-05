import React from "react";
import "./info.scss";
import { images } from "../../images";
const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container"></div>
        <h2 className="title1 title1--mod" style={{ marginLeft: "2%" }}>
          Our Mission
        </h2>
        <div className="we-are-different__content">
          <div className="snappy">
            <img src={images.snappy_process} alt="" />
            <h3>Easy Process</h3>
            <p>
              In order to use the application, all you have to do is select the
              filters that you want applied on the map then let the magic
              happen!
            </p>
          </div>
          <div className="affordable">
            <img src={images.affordable_prices} alt="" />
            <h3>Free of Cost</h3>
            <p>
              We wanted to ensure that the application would be free of cost so
              that any student or faculty member could easily view wi-fi
              traffic.
            </p>
          </div>
          <div className="people">
            <img src={images.people_first} alt="" />
            <h3>Our Team</h3>
            <p>
              Our team consists of the following students from Dr. Rudd's ITSC
              4155 class:
            </p>
            <br></br>
            <ul>
              <li>Anthony Pang</li>
              <li>Po Nguyen</li>
              <li>Ishan Kumar</li>
              <li>Makaila Vang</li>
              <li>James Wood</li>
              <li>Noah Burkhimer</li>
              <li>Will Welborn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
