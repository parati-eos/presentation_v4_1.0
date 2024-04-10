import React from "react";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/LoginNavbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({handleClick}) {
  return (
    <nav className="login-nav">
      <div className="login-navbar-container">
        <img
          src={ParatiLogo}
          className="login-navbar-logo"
          onClick={handleClick}
        ></img>
      </div>
    </nav>
  );
}

export default Navbar;
