import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/ApplicationNavbar.css";
import magicWand from "../../Asset/magic-wand.png";

function Navbar({ userpicture, historyShow, historyHide }) {
  const user = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const handleBuildPresentation = () => {
    // Redirect to the 'form.js' page upon clicking "Build Presentation"
    navigate("/form", { state: { user } });
  };
  const handleHistoryButtonClicked = () => {
    navigate("/pages/presentationhistory");
  };
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={ParatiLogo} alt="Parati Logo" />
        </div>
        <div className="navbar-generateppt-container">
          <div
            className="navbar-generateppt-container-button"
            onClick={handleBuildPresentation}
          >
            <div>
              <img src={magicWand}></img>{" "}
            </div>
            <div className="navbar-generateppt-container-txt">
              Generate Presentation
            </div>
          </div>
        </div>
        <div className="navbar-details-container">
          {/* Apply hover event handlers */}
          <button
            className="history-button"
            onMouseEnter={historyShow}
            onMouseLeave={historyHide}
            onClick={handleHistoryButtonClicked}
          >
            History
          </button>
          <img src={userpicture} alt="User Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
