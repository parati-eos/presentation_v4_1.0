import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/home_login.css";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`home-nav ${isSticky ? 'fixed top-0 w-full z-10 bg-white shadow-lg' : ''}`}>
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
          <a href="/auth/login" className="home-navbar-button2">Sign In</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
