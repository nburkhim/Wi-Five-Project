import React from 'react'
import Hero from "../hero/Hero";
import Info from "../info/Info";
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