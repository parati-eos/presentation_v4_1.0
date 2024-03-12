import React, { useState, useEffect } from "react";
import { csvParse } from "d3-dsv";
import ApplicationNavbar from '../../shared/js/ApplicationNavbar'
import HistoryCard from "../cards/historycard";
import '../css/presentationhistory.css'

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
const cardsData = [
  {
    name: 'Card 1',
    dateCreated: 'March 8, 2024',
    formLink: 'https://example.com/form1',
    imageUrl: 'https://picsum.photos/200'
  },
  {
    name: 'Card 2',
    dateCreated: 'March 9, 2024',
    formLink: 'https://example.com/form2',
    imageUrl: 'https://picsum.photos/200'
  },
  {
    name: 'Card 2',
    dateCreated: 'March 9, 2024',
    formLink: 'https://example.com/form2',
    imageUrl: 'https://picsum.photos/200'
  },

];

  return (
    // <center>
    //     <div>
    //   {formURLs.map((formId, index) => (
    //     <div key={index}>
          
    //       <iframe
    //         title="Google Slides"
    //         width="420"
    //         height="280"
    //         src= {`https://docs.google.com/presentation/d/${formId}/embed?rm=minimal&start=true&loop=true`}
           
    //       ></iframe>
    //     </div>
    //   ))}
    // </div>
    // </center>
    <div className="historypage">
      <ApplicationNavbar
        userpicture="https://media.licdn.com/dms/image/D4E03AQF9OIoA21TMgw/profile-displayphoto-shrink_800_800/0/1678095291696?e=2147483647&v=beta&t=Qm1QQSeBYNehm5t63Q1EhRpZbrfpiR35HPzAC78lRRs"
    
      />
      
      <h2>`   History</h2>
      <div className="HistoryCards">
      {cardsData.map((card, index) => (
        <HistoryCard key={index} {...card} />
      ))}
    </div>
    </div>
  );
}

export default History;
