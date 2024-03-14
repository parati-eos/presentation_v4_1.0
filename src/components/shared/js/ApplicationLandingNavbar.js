// ApplicationLandingNavbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ParatiLogo from "../../Asset/parati-logo.png";
import "../css/ApplicationLandingNavbar.css";

function Navbar({ user, historyShow, historyHide }) {
  const navigate = useNavigate();
  const handleHistoryButtonClicked = () => {
    navigate("/pages/presentationhistory" );
  }
  return (
    <nav>
      <div className="ALnavbar-container">
        <div className="ALnavbar-logo-container">
          <img src={ParatiLogo} alt="Parati Logo" />
        </div>
        <div className="ALnavbar-details-container">
          {/* Apply hover event handlers */}
          <button
            className="history-button"
            onMouseEnter={historyShow}
            onMouseLeave={historyHide}
            onClick={handleHistoryButtonClicked}
          >
            History
          </button>
          <img src={user.picture} alt="User Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
