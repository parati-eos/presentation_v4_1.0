import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/presentationcheck.css";
import "../css/HistoryOverlay.css";
import ShareButton from "./Share.js";
import ExportButton from "./export.js";
import Googleslides from "../../helper/googlepresentation-helper.js";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar.js";

const GooglePresentation = ({ url }) => {
  return (
    <div className="PresentationContainer">
      <div>
        <Googleslides />
      </div>
    </div>
  );
};

const PresentationCheck = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false); // State for showing copy message
  const historyTimeout = useRef(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [currentSlideKey, setCurrentSlideKey] = useState(0);
  var formId = localStorage.getItem("submissionId");
  const handleMouseEnterHistory = () => {
    clearTimeout(historyTimeout.current);
    setShowHistory(true);
  };

  const handleMouseLeaveHistory = () => {
    historyTimeout.current = setTimeout(() => {
      setShowHistory(false);
    }, 200);
  };

  const handleMouseEnterDiv = () => {
    clearTimeout(historyTimeout.current);
    console.log("Enter the div");
  };

  const handleMouseLeaveDiv = () => {
    setShowHistory(false);
    console.log("Left the div");
  };

  const handleBuildPresentation = () => {
    setCurrentSlideKey((prevKey) => prevKey + 1);
    navigate("/form");
  };

  const handleDownload = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
  };

  const handleShare = () => {
    const shareUrl = `http://localhost:3000/share?submissionId=${formId}`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        console.log("URL copied to clipboard: ", shareUrl);
        setShowCopyMessage(true); // Show copy message
        setTimeout(() => {
          setShowCopyMessage(false); // Hide copy message after 5 seconds
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard: ", error);
      });
  };

  return (
    <div className="main-container">
      <ApplicationNavbar
        userpicture="https://media.licdn.com/dms/image/D4E03AQF9OIoA21TMgw/profile-displayphoto-shrink_800_800/0/1678095291696?e=2147483647&v=beta&t=Qm1QQSeBYNehm5t63Q1EhRpZbrfpiR35HPzAC78lRRs"
        historyShow={handleMouseEnterHistory}
        historyHide={handleMouseLeaveHistory}
      />
      {showHistory && (
        <div className="history-preview-overlay">
          <div
            className="history-preview-bar"
            onMouseEnter={handleMouseEnterDiv}
            onMouseLeave={handleMouseLeaveDiv}
          >
            {/* History preview content */}
          </div>
        </div>
      )}
      <div className="presentation-viewing-container">
        <div className="presentation-viewing-center">
          <div className="presentation-view-slides">
            <GooglePresentation key={currentSlideKey} />
          </div>
          <div className="export-bttn">
            <ShareButton onClick={handleShare} />
            <ExportButton onClick={handleDownload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCheck;
