// ApplicationLanding.js
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApplicationLandingNavbar from "../../shared/js/ApplicationLandingNavbar.js";
import img1 from "../../Asset/1.png";
import img2 from "../../Asset/2.png";
import img3 from "../../Asset/3.png";
import img4 from "../../Asset/4.png";
import presentationImg from "../../Asset/background.jpg";
import magicWand from "../../Asset/magic-wand.png";
import "../css/applicationLanding.css";
import "../css/HistoryOverlay.css";

function ApplicationLanding() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state && location.state.user; // Retrieve user details from props
  const [showHistory, setShowHistory] = useState(false);
  const historyTimeout = useRef(null); // Ref for the timeout

  const handleCheckHistory = () => {
    console.log("Checking History...");
    // Add your logic to fetch and display history here
  };

  const handleBuildPresentation = () => {
    console.log("working");
    // Redirect to the 'form.js' page upon clicking "Build Presentation"
    navigate("/Pages/Nativeform", { state: { user } });
  };

  const handleLogout = () => {
    // Clear the user's session and redirect to the login page
    // You can implement your logout logic here
    // For example, clearing tokens, cookies, or any other user data
    navigate("/auth/login");
  };

  const handleMouseEnterHistory = () => {
    clearTimeout(historyTimeout.current); // Clear any existing timeout
    setShowHistory(true);
  };

  const handleMouseLeaveHistory = () => {
    // Set a timeout to hide the history div after a delay
    historyTimeout.current = setTimeout(() => {
      setShowHistory(false);
    }, 200); // Adjust the delay as needed
  };

  const handleMouseEnterDiv = () => {
    clearTimeout(historyTimeout.current); // Clear any existing timeout
    console.log("Enter the div");
  };

  const handleMouseLeaveDiv = () => {
    setShowHistory(false);
    console.log("Left the div");
  };

  return (
    <div className="main-container">
      <div className="appnavbar">
        <ApplicationLandingNavbar
          user={user}
          historyShow={handleMouseEnterHistory}
          historyHide={handleMouseLeaveHistory}
        />
      </div>
      {showHistory && (
        <div className="history-preview-overlay">
          <div
            className="history-preview-bar"
            onMouseEnter={handleMouseEnterDiv}
            onMouseLeave={handleMouseLeaveDiv} // Close history on mouse leave
          >
            <div className="history-preview">
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 1</p>
              </div>
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 2</p>
              </div>
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 3</p>
              </div>
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 4</p>
              </div>
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 5</p>
              </div>
              <div className="presentation-history">
                <img src={presentationImg}></img>
                <p>Presentation 6</p>
              </div>
            </div>
            <div className="see-more-container">
              <a>See More ...</a>
            </div>
          </div>
        </div>
      )}
      <div className="app-landing-container">
        <div className="image-stack" onMouseEnter={handleMouseLeaveDiv}>
          <div className="button-shade">
            <div className="button-shade1">
              <div className="button-shade2">
                <div className="button-shade3">
                <button
                  className="overlay-button"
                  onClick={handleBuildPresentation}
                >
                  <div>
                    <img src={magicWand}></img>{" "}
                  </div>
                  <div>Generate Presentation</div>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationLanding;
