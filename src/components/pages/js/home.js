// Home.js
import React from "react";
import Navbar from "..//../shared/js/Home_login"; // Import your Navbar component
// import Hero from "../home/hero.tsx";
// import { HeroParallaxDemo } from "../home/hero.tsx"; // Import HeroParallaxDemo instead of Hero
import Feature from "../home/Feature";
import TopFeature from "../home/TopFeature";
import "../css/home.css";
import Footer from "../../shared/js/footer";
import {StickyScrollRevealDemo} from "../home/hero1.tsx"
import {BackgroundBoxesDemo} from "../home/pitch.tsx" // Add this
import Blog from "../home/blog.tsx"

import { StickyScrollRevealDemo } from "../home/stickyScrollReveal.tsx";
import Stats from "../home/stats.tsx";

function Home() {
  return (
    <div style={{ backgroundColor: "transparent", overflowX: 'hidden', overflowY: 'hidden' }}>
      {/* Render only the Navbar component on the Home page */}
      <Navbar />
      <StickyScrollRevealDemo />
      <BackgroundBoxesDemo />
      <Blog/>
      {/* <Hero /> */}
      <HeroParallaxDemo /> 
      <StickyScrollRevealDemo/>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default Home;
