import React, { useState, useEffect } from "react";
import "./gph.css";
import loadingImage from "../Asset/Loading.gif";

const Googleslides = () => {
  const userId = localStorage.getItem("userEmail");
  var formId = localStorage.getItem("submissionId");
  const [slidesData, setSlidesData] = useState([]);
  const [slidesId, setSlidesId] = useState("");
  const [loading, setLoading] = useState(true); // Change to boolean


  useEffect(() => {
    const fetchSlidesData = async () => {
      try {
        const url = `https://zynth.ai/api/slides?userId=${userId}&formId=${formId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch slides data");
        }
        const data = await response.json();
        setSlidesId(data.id);
        setSlidesData(data.data);
        setLoading(data.data.length < 1); // Set loading based on the length of data
      } catch (error) {
        console.error("Error fetching slides data:", error.message);
      }
    };
    const intervalId = setInterval(fetchSlidesData, 5000);
    return () => clearInterval(intervalId);
  }, [userId, formId]);
  

  if (loading) { // Use strict equality
    return (
      <div className="loadingIcon">
        <img src={loadingImage} alt="Loading..." />
      </div>
    );
  }
  console.log(slidesData.length);
  try {
    return (
      <div>
        {slidesData.length < 1 ? (
          <div>No slides to display</div>
        ) : (
          slidesData.map((slideId, index) => (
            <div key={slideId}>
              <iframe
                key={index} 
                className="slides-iframe"
                title="Google Slides Embed"
                src={`https://docs.google.com/presentation/d/${slidesId}/embed?rm=minimal&start=false&loop=false&slide=id.${slideId}`}
              ></iframe>
            </div>
          ))
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering slides:", error);
    return <div className="error-txt">
      No slides to display....
      <p>click on generate pitch deck button</p>
    </div>;
  }
  



};

export default Googleslides;
