import React, { useState, useEffect } from "react";
import { csvParse } from "d3-dsv";

function History() {
//   const navigate = useNavigate();
  const [userID, setUserID] = useState(localStorage.getItem('userEmail'));
  const [formURLs, setFormIds] = useState([]); // Initialize formIds as an array
  const GOOGLE_SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTtSZsKW4fN5bgdgKUx16lG6q5ljJN9eyjnY_LSLyP_RVZV_MEhq_4vyoMqCsHrBXJnCfdVOeGxRE3Z/pub?gid=0&single=true&output=csv`;

  useEffect(() => {
    fetch(GOOGLE_SHEET_CSV_URL)
      .then((response) => response.text())
      .then((csvData) => {
        const jsonData = csvParse(csvData);
        const formURLsForUser = findFormIdsByEmail(jsonData, userID);
        setFormIds(formURLsForUser);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [userID]);

  const findFormIdsByEmail = (data, email) => {
    const filteredRows = data.filter((row) => row["User ID"] === email);
    if (filteredRows.length === 0) return [];
    return filteredRows.map(row => getSheetIdFromUrl(row["Presentation URL"])); // Extract "Form ID" values into an array
  };

  function getSheetIdFromUrl(url) {
    const match = url.match(/\/d\/(.+?)\/|\/open\?id=(.+?)(?:&|$)/);
    return match ? (match[1] || match[2]) : null;
}


  return (
    <center>
        <div>
      {formURLs.map((formId, index) => (
        <div key={index}>
          
          <iframe
            title="Google Slides"
            width="420"
            height="280"
            src= {`https://docs.google.com/presentation/d/${formId}/embed?rm=minimal&start=true&loop=true`}
           
          ></iframe>
        </div>
      ))}
    </div>
    </center>
  );
}

export default History;
