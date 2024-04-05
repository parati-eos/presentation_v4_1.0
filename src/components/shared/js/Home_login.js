import React from "react";
import ParatiLogo from "../../Asset/parati-logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/home_login.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar-containerhome">
        <div className="icon">
          <Link to="/">
            {/* <img
              src={ParatiLogo}
              alt="Parati Logo"
              className="navbar-logo"
            ></img> */}
          </Link>
        </div>

        <div className="navbar-buttons">
          <Link to="/auth/login" className="navbar-button1">
            Login
          </Link>
          <Link to="/auth/login" className="navbar-button2">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;