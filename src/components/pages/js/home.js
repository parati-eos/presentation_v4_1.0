// Home.js
import React from 'react';
import Navbar from '..//../shared/js/Home_login'; // Import your Navbar component
import Hero from '../home/hero';
import Feature from '../home/Feature';

function Home() {
  return (
    <div>
    {/* Render only the Navbar component on the Home page */}
    <Navbar />
    <Hero/>
    <Feature/>
  
  </div>
  );
}

export default Home;
