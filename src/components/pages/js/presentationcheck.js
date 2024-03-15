import React, { useState, useRef, useEffect } from "react";
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

  // Company Name--------------->>
  const [PPTName, setPPTName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://pitchdeck-server.onrender.com/slidesURL?formId=${formId}`;
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPPTName(data[3]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (formId !== '') {
      fetchData();
    }
  }, [formId]);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setPPTName(e.target.value);
  };


  const handleSave = async() => {
    setIsEditing(false);
   
    const requestBody = {
      userID: localStorage.getItem('userEmail'),
      formID: localStorage.getItem('submissionId'),
      newColumnValue: PPTName
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/updateRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        console.log('Row updated successfully');
        alert('Row updated successfully')
      } else {
        console.error('Failed to update row');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // <<---------------Company Name


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
        {isEditing ? (
              <input type="text" value={PPTName} onBlur={handleSave} onChange={handleNameChange} />
            ) : (
              <h2 onClick={() => setIsEditing(true)}><span>{PPTName}</span></h2>
            )}
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
