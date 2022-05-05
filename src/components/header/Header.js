import React,{useState} from "react";
import "./header.scss";
import { Link } from 'react-router-dom'
import { images } from "../../images";
import Share from "../Share/Share";
const Header = () => {

  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <Link to={'/'} className="link"><img src={images.wifive} alt="" /></Link>
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
          <Share/>
          <li className="btn btn--nav-btn"><Link to={'/Map'} className="link" >View Map</Link></li>
          </ul>
          <div className="hamburger">
              <img src={images.hamburger} alt="" onClick={handleClick}/>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
