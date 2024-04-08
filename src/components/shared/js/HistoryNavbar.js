import React, { useState, useLocation } from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/HistoryNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import magicWand from "../../Asset/magic-wand.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const useremail = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const handleBuildPresentation = () => {
    // Redirect to the 'form.js' page upon clicking "Build Presentation"
    navigate("/form", { state: { useremail } });
  };
  return (
    <nav className="history-nav">
      <div className="history-navbar-container">
        <div className="history-navbar-logo-container">
          <img src={ParatiLogo} width={200} alt="Parati Logo" />
        </div>
        <div className="history-navbar-generateppt-container">
          <button onClick={handleBuildPresentation}>
            <div className="history-button-inner">
              <img src={magicWand}></img>
              <span>Generate Pitch Deck</span>
            </div>
          </button>
        </div>
        <div className="history-navbar-details-container">
          {/* Apply hover event handlers */}
          <img src={localStorage.getItem("userDP")} className="history-user" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
