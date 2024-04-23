import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./gph.css";
import loadingImage from "../Asset/Loading.gif";
import { Grid } from "react-loader-spinner";

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
      const url = `https://zynth.ai/api/slides?&formId=${formId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch slides data");
      }
      const data = await response.json();
      setSlidesId(data.id);
      setSlidesData(data.data);
      if (data.data.length >= 2) {
        setLoading("false");
      }

    } catch (error) {
      console.error("Error fetching slides data:", error.message);
    }
  };

  // In your useEffect, load the data from localStorage before starting the interval
  useEffect(() => {
    
    fetchSlidesData(); // Poll every 5 seconds
 
  }, [formId]); // Removed slidesData.length from the dependency array

  if (loading == "true") {
    return (
      <div className="loadingIcon">
        <Grid
            visible={true}
            height="80"
            width="80"
            color="#E6A500"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
            
        />
      </div>
    );
  }

  return (
    <div className="slides"> 
      {slidesData.map((slideId, index) => (
        <div key={slideId}>
          <iframe
            key={index} // Use index as key
            className="slides-iframe"
            title="Google Slides Embed"
            src={`https://docs.google.com/presentation/d/${slidesId}/embed?rm=minimal&start=false&loop=false&slide=id.${slideId}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default GoogleslidesShare;
