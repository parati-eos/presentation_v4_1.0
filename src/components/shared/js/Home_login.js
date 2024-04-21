import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/home_login.css";

function Navbar() {
  return (
    <nav className="home-nav">
      <div className="home-navbar-container">
        <div className="home-icon">
          <Link to="/" className="home-icon-img">
            <img
              src={ParatiLogo}
              alt="Parati Logo"
              className="home-navbar-logo"
            />
          </Link>
        </div>
        <div className="home-navbar-buttons">
          <div className="dropdown-mobile">
            <button className="home-navbar-section-button dropdown-btn">Menu</button>
            <div className="dropdown-content">
              <Link
                to="#"
                className="dropdown-link"
                onClick={() => scroll.scrollTo("samples-section", {
                  smooth: true,
                  offset: -70, // Adjust this value according to your layout
                })}
              >
                Samples
              </Link>
              <Link
                to="#"
                className="dropdown-link"
                onClick={() => scroll.scrollTo("blogs", {
                  smooth: true,
                  offset: -70, // Adjust this value according to your layout
                })}
              >
                Blogs
              </Link>
            </div>
          </div>
          <Link
            to="samples-section"
            className="home-navbar-section-button"
            smooth={true}
            duration={500}
          >
            Features
          </Link>
          <Link
            to="blogs"
            className="home-navbar-section-button"
            smooth={true}
            duration={500}
          >
            Blogs
          </Link>
          <a href="/auth/login" className="home-navbar-button1">Log In</a>
          <a href="/auth/login" className="home-navbar-button2">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
