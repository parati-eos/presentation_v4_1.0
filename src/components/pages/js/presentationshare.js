
import React, { useState, useRef, useEffect} from "react";
import { useNavigate , useLocation } from "react-router-dom";

import "../css/presentationshare.css";
import "../css/HistoryOverlay.css";
import ShareButton from "./Share.js";
import ExportButton from "./export.js";
import Googleslides from "../../helper/googlepresentation-helper.js";
import ApplicationLandingNavbar from "../../shared/js/LoginNavbar.js"
import GoogleslidesShare from "../../helper/googlepresentationShare-helper.js";

import ParatiLogo from "../../Asset/parati-logo.png";

const GooglePresentation = ({ url }) => {
  return (
    <div className="PresentationContainer">
      <div>
        <GoogleslidesShare />
      </div>
    </div>
  );
};

const PresentationCheck = () => {
  const historyTimeout = useRef(null);
  const [currentSlideKey, setCurrentSlideKey] = useState(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formId = searchParams.get("submissionId");

  // Company Name--------------->>


  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://pitchdeck-server.onrender.com/slidesURL?formId=${formId}`;
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  }, [formId]);

  return (
    <div className="main-container">
      <div className="presentation-viewing-container">
      <div className="presentation-viewing-side">
      <div className="logo-icon">
            <img
              src={ParatiLogo}
              alt="Parati Logo"
              className="branding-logo"
            ></img>
        </div>
        </div>
        <div className="presentation-viewing-center">
          <div className="presentation-view-slides">
            <GooglePresentation key={currentSlideKey} />
          </div>
        </div>
        <div className="presentation-viewing-side"></div>
      </div>
    </div>
  );
};

export default PresentationCheck;










