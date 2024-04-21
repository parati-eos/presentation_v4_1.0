// Home.js
import React from "react";
import Navbar from "..//../shared/js/Home_login";
import Footer from "../../shared/js/footer";
import { HeroParallaxDemo } from "../home/hero.tsx"; // Assuming HeroParallax is your component
import { BackgroundBoxesDemo } from "../home/pitch.tsx";
import Blog from "../home/blog.tsx";
import { StickyScrollRevealDemo } from "../home/stickyScrollReveal.tsx";
import Stats from "../home/stats.tsx";

function Home() {
  return (
    <div style={{ backgroundColor: "transparent", overflowX: 'hidden', overflowY: 'hidden' }}>
      <Navbar />
      <div id="samples-section">
        <HeroParallaxDemo />
        {/* Add other content for Samples section */}
      </div>
      <StickyScrollRevealDemo/>
      <Stats/>
      <div id="blogs"> {/* Ensure this div is still wrapping your Blog component */}
        <Blog/>
      </div>
      <BackgroundBoxesDemo />
      <Footer/>
    </div>
  );
}

export default Home;
