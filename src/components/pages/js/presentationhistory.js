import React, { useState, useEffect } from "react";
import { csvParse } from "d3-dsv";
import ApplicationNavbar from '../../shared/js/ApplicationNavbar'
import HistoryCard from "../cards/historycard";
import '../css/presentationhistory.css'

function History() {

const [userID, setUserID] = useState(localStorage.getItem('userEmail'));
const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/history', {
          headers: {
            'x-userid': userID
          }
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log()
        setHistoryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userID]);
  return (
    <div className="historypage">
      <ApplicationNavbar
        userpicture="https://media.licdn.com/dms/image/D4E03AQF9OIoA21TMgw/profile-displayphoto-shrink_800_800/0/1678095291696?e=2147483647&v=beta&t=Qm1QQSeBYNehm5t63Q1EhRpZbrfpiR35HPzAC78lRRs"
    
      />
      
      <h2>`   History</h2>
      <div className="HistoryCards">
      {historyData.map((card, index) => (
        <HistoryCard key={index} {...card} />
      ))}
    </div>
    </div>
  );
}

export default History;
