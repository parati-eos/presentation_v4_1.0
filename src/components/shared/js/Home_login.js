// Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import { Link } from "react-router-dom";
import "../css/home_login.css";

function Navbar() {
  const navigate = useNavigate();
  const handleLogoClicked = () => {
    navigate("https://www.parati.in");
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById("blogs");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSamples = () => {
    const samplesSection = document.getElementById("samples-section");
    if (samplesSection) {
      samplesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="home-nav">
      <div className="home-navbar-container">
        <div className="home-icon">
          <Link to="/" className="home-icon-img" onClick={handleLogoClicked}>
            <img
              src={ParatiLogo}
              alt="Parati Logo"
              className="home-navbar-logo"
              onClick={handleLogoClicked}
            />
          </Link>
        </div>
        <div className="home-navbar-buttons">
          <div className="dropdown-mobile">
            <button className="home-navbar-section-button dropdown-btn">Menu</button>
            <div className="dropdown-content">
              <Link to="#" className="dropdown-link">Features</Link>
              <button className="dropdown-link" onClick={scrollToSamples}>Samples</button>
              <a href="#blogs" className="dropdown-link" onClick={scrollToBlog}>Blogs</a>
            </div>
          </div>
          <Link to="/" className="home-navbar-section-button">Features</Link>
          <a href="#samples-section" className="home-navbar-section-button" onClick={scrollToSamples}>Samples</a>
          <a href="#blogs" className="home-navbar-section-button" onClick={scrollToBlog}>Blogs</a>
          <Link to="/auth/login" className="home-navbar-button1">Log In</Link>
          <Link to="/auth/login" className="home-navbar-button2">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
