import React, { useState, useEffect } from "react";
import "./gph.css";
import loadingImage from "../Asset/Loading.gif";

const Googleslides = ({ userId, formId }) => {
  const [slidesData, setSlidesData] = useState([]);
  const [slidesId, setSlidesId] = useState("");
  const [loading, setLoading] = useState("true");
  
  console.log([userId, formId]);
  const fetchSlidesData = async () => {
    console.log([userId, formId]);
    try {
      const url = `https://pitchdeck-server.onrender.com/slides?userId=${userId}&formId=${formId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch slides data");
      }
      const data = await response.json();
      if (data.data.length > slidesData.length) {
        if (loading == "true" && data.data.length == 2) {
          setLoading("false");
        }
        setSlidesData(data.data);
        setSlidesId(data.id);
      }
    } catch (error) {
      console.error("Error fetching slides data:", error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchSlidesData, 5000); // Poll every 5 seconds
    return () => clearInterval(intervalId);
  }, [userId, formId, slidesData.length]); // Add slidesData.length to the dependency array

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

export default Googleslides;









