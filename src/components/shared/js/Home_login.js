import React from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/home_login.css";

function Navbar() {
  const navigate = useNavigate();
  const handleLogoClicked = () => {
    navigate("https://www.parati.in");
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
            ></img>
          </Link>
        </div>
        <div class="home-navbar-buttons">
  <div class="dropdown-mobile">
    <button class="home-navbar-section-button dropdown-btn">Menu</button>
    <div class="dropdown-content">
      <Link to="/auth/login" class="dropdown-link">Features</Link>
      <Link to="/auth/login" class="dropdown-link">Samples</Link>
      <Link to="/auth/login" class="dropdown-link">Blogs</Link>
    </div>
  </div>
  <Link to="/auth/login" class="home-navbar-section-button">Features</Link>
  <Link to="/auth/login" class="home-navbar-section-button">Samples</Link>
  <Link to="/auth/login" class="home-navbar-section-button">Blogs</Link>
  <Link to="/auth/login" class="home-navbar-button1">Log In</Link>
  <Link to="/auth/login" class="home-navbar-button2">Get Started</Link>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
