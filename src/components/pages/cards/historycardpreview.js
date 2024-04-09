import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./historycardpreview.css";

const HistoryCardPreveiw = ({ userID, submissionID, PPTName, Date, link }) => {
  const navigate = useNavigate();
  const handlePreviewCardClicked = () => {
    navigate(
      `/share?submissionId=${submissionID}`
    );
  };
  return (
    <div className="history-preview">
      <div className="preview-card" onClick={handlePreviewCardClicked}>
        <div className="preview-card-image">
          <iframe
            src={`https://docs.google.com/presentation/d/${link}/embed?rm=minimal&start=true&loop=true`}
            onClick={handlePreviewCardClicked}
          />
        </div>
        <div className="preview-card-content">
          <div>
            {PPTName} {Date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCardPreveiw;
