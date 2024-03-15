import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar"; // Assuming ApplicationNavbar is a component you've defined
import "../css/presentationcheck.css";

const PresentationShare = () => {
  const handleMouseEnterHistory = () => {
    // handle mouse enter logic
  };

  const handleMouseLeaveHistory = () => {
    // handle mouse leave logic
  };

  return (
    <div className="main-container">
      <ApplicationNavbar
        userpicture="https://media.licdn.com/dms/image/D4E03AQF9OIoA21TMgw/profile-displayphoto-shrink_800_800/0/1678095291696?e=2147483647&v=beta&t=Qm1QQSeBYNehm5t63Q1EhRpZbrfpiR35HPzAC78lRRs"
        historyShow={handleMouseEnterHistory}
        historyHide={handleMouseLeaveHistory}
      />
      <div className="presentation-viewing-container">
        <div className="presentation-viewing-center">
          <div className="presentation-view-slides">
            {/* Your presentation slides go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationShare;
