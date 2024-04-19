// Home.js
import React from "react";
import Navbar from "..//../shared/js/Home_login"; // Import your Navbar component
import Footer from "../../shared/js/footer";
import {BackgroundBoxesDemo} from "../home/pitch.tsx" // Add this
import Blog from "../home/blog.tsx"
import { StickyScrollRevealDemo } from "../home/stickyScrollReveal.tsx";
import Stats from "../home/stats.tsx";
import { HeroParallaxDemo } from "../home/hero.tsx";

function Home() {
  return (
    <div style={{ backgroundColor: "transparent", overflowX: 'hidden', overflowY: 'hidden' }}>
      {/* Render only the Navbar component on the Home page */}
      <Navbar />
      <HeroParallaxDemo/> 
      <StickyScrollRevealDemo/>
      <Stats/>
      <BackgroundBoxesDemo />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Home;
