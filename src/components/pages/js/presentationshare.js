import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar"; // Assuming ApplicationNavbar is a component you've defined
import "../css/presentationcheck.css";

const PresentationShare = () => {
  const location = useLocation();
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const formId = searchParams.get("submissionId");

        const response = await fetch(`https://pitchdeck-server.onrender.com/slidesURL?formId=${formId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch slides");
        }
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
  }, [location.search]);

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
            {slides.map((slide, index) => (
              <div key={index}>
                {/* Render each slide */}
                <iframe title={`Slide ${index + 1}`} src={slide}></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationShare;
