// Home.js
import React from "react";
import Navbar from "..//../shared/js/Home_login"; // Import your Navbar component
import Hero from "../home/hero";
import Feature from "../home/Feature";
import TopFeature from "../home/TopFeature";
import "../css/home.css";

function Home() {
  return (
    <div style={{ backgroundColor: "transparent", overflowX: 'hidden' }}>
      {/* Render only the Navbar component on the Home page */}
      <Navbar />
      <Hero />
      <TopFeature />
      <Feature />
    </div>
  );
}

export default Home;
