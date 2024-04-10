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

        <div className="home-navbar-buttons">
          <Link to="/auth/login" className="home-navbar-button1">
            Login
          </Link>
          <Link to="/auth/login" className="home-navbar-button2">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
