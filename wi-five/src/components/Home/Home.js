import React from 'react'
import Hero from "../hero/Hero";
import Info from "../info/Info";
import { Link } from 'react-router-dom'

// const Home = () => {
//     return (
//         <div className='home'>
//             <img className='logo' src={logo} alt='logo' />
//             <h1>Welcome to Wi-Five</h1>
//             <p>We allow our users to view wi-fi heat map data across the UNCC campus to where their next study, hangout, or sales location will be!</p>
//             <button><Link to={'/Map'} >View Map</Link></button>
//         </div>
//     )
// }
const Home = () => {
    return (
      <div>
        <Hero />
        <section className="section3">
          <Info />
        </section>
      </div>
    );
  };

export default Home