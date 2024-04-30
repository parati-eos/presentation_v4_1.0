import React, { useState } from "react";
import "./historycard.css";
import { useNavigate } from "react-router-dom";
import ShareButton from "../js/Share.js";
import ExportButton from "../js/export.js";

const HistoryCard = ({ userID, submissionID, PPTName, Date, link }) => {
  const [editableName, setEditableName] = useState(PPTName);
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const handleHistoryCardClicked = () => {
    window.open(`/share?submissionId=${submissionID}`, '_blank');
  };

  const handleNameChange = (e) => {
    setEditableName(e.target.value);
  };
  const handleShare = () => {
    const uniqueShareableUrl = `https://zynth.ai/share?submissionId=${submissionID}`;

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
      // For macOS devices where navigator.share is not available
      navigator.clipboard
        .writeText(uniqueShareableUrl)
        .then(() => alert("URL copied to clipboard"))
        .catch((error) => console.error("Copy failed: ", error));
    } else {
      // For other devices where neither navigator.share nor clipboard API is available
      alert("Sharing is not supported on this device/browser.");
    }
  };


  const handleSave = async () => {
    setIsEditing(false);

    const requestBody = {
      userID: userID,
      formID: submissionID,
      newColumnValue: editableName,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/updateRow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Row updated successfully");
        alert("Row updated successfully");
      } else {
        console.error("Failed to update row");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="card">
          <div className="card-image" onClick={handleHistoryCardClicked}>
            <iframe
              src={`https://docs.google.com/presentation/d/${link}/embed?rm=minimal&start=true&loop=true`}
            />
          </div>
        <div className="card-content">
          <div className="card-header">
            {isEditing ? (
              <input
                type="text"
                value={editableName}
                onBlur={handleSave}
                onChange={handleNameChange}
              />
            ) : (
              <h2 onClick={() => setIsEditing(true)}>
                Name: <span>{editableName}</span>
              </h2>
            )}
          </div>
          <h2>
            Date Created: <span>{Date}</span>
          </h2>
          <div className="card-buttons">
            <ShareButton onClick={handleShare}/>
            <ExportButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
