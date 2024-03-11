import React, { useState, useEffect } from "react";
import "./gph.css";

const Googleslides = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [slidesId, setSlidesId] = useState("");

  const fetchSlidesData = async () => {
    const userId = await localStorage.getItem("userEmail");
    const formId = await localStorage.getItem("submissionId");
    console.log(userId, formId);
    try {
      const url = `https://pitchdeck-server.onrender.com/slides?userId=${userId}&formId=${formId}`;
      const response = await fetch(url);
      console.log(url)
      if (!response.ok) {
        throw new Error("Failed to fetch slides data");
      }
      const data = await response.json();
      setSlidesData(data.data);
      setSlidesId(data.id);
    } catch (error) {
      console.error("Error fetching slides data:", error.message);
    }
    console.log("running...");
  };

  useEffect(() => {
    const intervalId = setInterval(fetchSlidesData, 5000); // Poll every 5 seconds
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="slides">
      {slidesData.map((slide) => (
        <div key={slide.objectId}>
          <iframe
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
