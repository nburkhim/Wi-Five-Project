import React from "react";
import { images } from "../../images";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-header">
              <div className="logo">
                <img src={images.wifive} alt="" />
              </div>
              <div className="social-media-icons">
                <img src={images.fb} alt="" />
                <img src={images.twitter} alt="" />
                <img src={images.insta} alt="" />
                <img src={images.pinterest} alt="" />
              </div>
            </div>
            <div className="fotter-menu"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
