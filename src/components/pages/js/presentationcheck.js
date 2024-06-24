import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/presentationcheck.css";
import "../css/HistoryOverlay.css";
import ShareButton from "./Share.js";
import ExportButton from "./export.js";
import Googleslides from "../../helper/googlepresentation-helper.js";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar.js";

import HistoryCardPreview from "../cards/historycardpreview.js";

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
  const historyTimeout = useRef(null);
  const [currentSlideKey, setCurrentSlideKey] = useState(0);
  const [userID, setUserID] = useState(localStorage.getItem("userEmail"));
  const [historyData, setHistoryData] = useState([]);
  const [PPTName, setPPTName] = useState("PPTName");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const formId = localStorage.getItem("submissionId");

  // Set up an interval to refresh the GooglePresentation component every 10 seconds for 60 seconds
  useEffect(() => {
    let refreshCount = 0;
    const interval = setInterval(() => {
      setCurrentSlideKey((prevKey) => prevKey + 1);
      refreshCount += 1;
      if (refreshCount === 6) {
        clearInterval(interval);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchDataHistory = async () => {
      try {
        const response = await fetch("https://zynth.ai/api/history", {
          headers: {
            "x-userid": userID,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataHistory();
  }, [userID]);

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
  };

  const handleMouseLeaveDiv = () => {
    setShowHistory(false);
  };

  const handleShowMoreHistory = () => {
    navigate("/pages/presentationhistory");
  };

  const handleBuildPresentation = () => {
    setCurrentSlideKey((prevKey) => prevKey + 1);
    navigate("/form");
  };

  const handleShare = () => {
    const uniqueShareableUrl = `https://zynth.ai/share?submissionId=${formId}`;

    if (navigator.share) {
      navigator
        .share({
          title: "Share Presentation",
          text: "Check out this presentation",
          url: uniqueShareableUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Share failed: ", error));
    } else if (navigator.clipboard && navigator.platform.includes("Mac")) {
      navigator.clipboard
        .writeText(uniqueShareableUrl)
        .then(() => alert("URL copied to clipboard"))
        .catch((error) => console.error("Copy failed: ", error));
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://zynth.ai/api/slides/url?formId=${formId}`;
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
        setPPTName(data[3]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (formId !== "") {
      fetchData();
    }
  }, [formId]);

  const handleNameChange = (e) => {
    setPPTName(e.target.value);
  };

  const handleSave = async () => {
    setIsEditing(false);

    const requestBody = {
      userID: localStorage.getItem("userEmail"),
      formID: localStorage.getItem("submissionId"),
      newColumnValue: PPTName,
    };

    try {
      const response = await fetch("https://zynth.ai/api/submission/update-row", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Row updated successfully");
      } else {
        console.error("Failed to update row");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const formId = localStorage.getItem("submissionId");
      if (!formId) {
        throw new Error("Form ID not found in localStorage");
      }
  
      const response = await fetch(`https://zynth.ai/api/slides/url?formId=${formId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      if (!Array.isArray(result) || result.length < 3) {
        throw new Error("Invalid response format");
      }
  
      const url = result[2];
  
      if (!url || typeof url !== "string") {
        throw new Error("Invalid URL in response");
      }
  
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error exporting presentation:", error);
      alert("Oops! It seems like the pitch deck presentation is missing. Click 'Generate Presentation' to begin your journey to success!");
    }
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
            <div className="history-preview-cards-row">
              {historyData.slice(0, 5).map((card, index) => (
                <HistoryCardPreview key={index} {...card} />
              ))}
            </div>
            <div className="see-more-container" onClick={handleShowMoreHistory}>
              See More ...
            </div>
          </div>
        </div>
      )}

      <div className="presentation-viewing-container">
        <div className="presentation-viewing-side">
          <div className="share-export">
            {isEditing ? (
              <input
                type="text"
                value={PPTName}
                onBlur={handleSave}
                onChange={handleNameChange}
              />
            ) : (
              <h2 onClick={() => setIsEditing(true)}>
                <span>{PPTName}</span>
              </h2>
            )}
            <div className="share-export-combine">
              <ShareButton onClick={handleShare} />
              <ExportButton onClick={handleDownload} />
            </div>
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
