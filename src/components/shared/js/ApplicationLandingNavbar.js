import React, { useState,useLocation } from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/ApplicationNavbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHistory, faUserCircle} from '@fortawesome/free-solid-svg-icons';

function Navbar({historyShow, historyHide }) {

  const navigate = useNavigate();
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
          {/* <button
            onClick={handleBuildPresentation}
          >
            <div className="button-inner">
            <img src={magicWand}></img>
            <span>Generate Pitch Deck</span>
            </div>
          </button> */}
        </div>
        <div className="navbar-details-container">
          {/* Apply hover event handlers */}
          <button
            className="history-button"
            onMouseEnter={historyShow}
            onMouseLeave={historyHide}
            onClick={handleHistoryButtonClicked}
          >
           <FontAwesomeIcon icon={faHistory}/> History
          </button>
          
          <FontAwesomeIcon icon={faUserCircle} className="user"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
