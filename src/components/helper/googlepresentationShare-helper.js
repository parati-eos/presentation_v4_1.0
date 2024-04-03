import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./gph.css";
import loadingImage from "../Asset/Loading.gif";

const GoogleslidesShare = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get the value of the submissionId parameter from the search string
  const formId = searchParams.get('submissionId');
  const [slidesData, setSlidesData] = useState([]);
  const [slidesId, setSlidesId] = useState("");
  const [loading, setLoading] = useState("true");


  const fetchSlidesData = async () => {
    try {
      const url = `https://pitchdeck-server.onrender.com/slides?&formId=${formId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch slides data");
      }
      const data = await response.json();
      if (data.data.length >= 2) {
        setLoading("false");
      }

      // Only update the state if the new data is different from the old data
      if (JSON.stringify(data.data) !== JSON.stringify(slidesData)) {
        // Save the fetched data to localStorage
        localStorage.setItem("slidesData", JSON.stringify(data.data));
        localStorage.setItem("slidesId", data.id);
        setSlidesData(data.data);
        setSlidesId(data.id);
      }
    } catch (error) {
      console.error("Error fetching slides data:", error.message);
    }
  };

  // In your useEffect, load the data from localStorage before starting the interval
  useEffect(() => {
    const savedSlidesData = JSON.parse(localStorage.getItem("slidesData"));
    const savedSlidesId = localStorage.getItem("slidesId");
    if (savedSlidesData && savedSlidesId) {
      setSlidesData(savedSlidesData);
      setSlidesId(savedSlidesId);
      setLoading("false");
    }

    fetchSlidesData(); // Poll every 5 seconds
 
  }, [formId]); // Removed slidesData.length from the dependency array

  if (loading == "true") {
    return (
      <div className="loadingIcon">
        <img src={loadingImage} alt="description" />
      </div>
    );
  }

  return (
    <div className="slides"> 
      {slidesData.slice(0, slidesData.length - 1).map((slide, index) => (
        <div key={slide.objectId}>
          <iframe
            key={slide.objectId} // Add key prop here
            className="slides-iframe"
            title="Google Slides Embed"
            src={`https://docs.google.com/presentation/d/${slidesId}/embed?rm=minimal&start=false&loop=false&slide=id.${slide.objectId}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default GoogleslidesShare;
