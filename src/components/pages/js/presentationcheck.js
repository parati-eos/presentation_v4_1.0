import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/presentationcheck.css";
import "../css/HistoryOverlay.css";
import ShareButton from "./Share.js";
import ExportButton from "./export.js";
import Googleslides from "../../helper/googlepresentation-helper.js";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar.js";

var userId = localStorage.getItem("userEmail");
var formId = localStorage.getItem("submissionId");
const GooglePresentation = ({ url }) => {
  return (
    <div className="PresentationContainer">
      <div>
        <Googleslides  userId={userId} formId={formId}/>
      </div>
    </div>
  );
};

const PresentationCheck = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const historyTimeout = useRef(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [currentSlideKey, setCurrentSlideKey] = useState(0);

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

  const applicationId = "your_application_id";
  const presentationUrl =
    "https://docs.google.com/presentation/d/1enbGTOYKtwHDQ5R2Z3BMYPnXq0xdiOk8DL_hjKcpfOo/edit#slide=id.SLIDES_API1193561537_0";

  const handleDownload = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
  };

  const handleShare = () => {
    console.log("Sharing...");
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
