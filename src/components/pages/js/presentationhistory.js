import React, { useState, useEffect ,useLocation} from "react";
import { csvParse } from "d3-dsv";
import ApplicationNavbar from "../../shared/js/ApplicationNavbar";
import HistoryCard from "../cards/historycard";
import "../css/presentationhistory.css";

function History() {
  const [userID, setUserID] = useState(localStorage.getItem("userEmail"));
  const [historyData, setHistoryData] = useState([]);
  const location = useLocation();
  const user = location.state && location.state.user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pitchdeck-server.onrender.com/history",
          {
            headers: {
              "x-userid": userID,
            },
          }
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userID]);
  return (
    <div className="historypage">
      <ApplicationNavbar user={user}/>

      <div className="history-component">
      <h2>History</h2>
      <div className="HistoryCards">
        {historyData.map((card, index) => (
          <HistoryCard key={index} {...card} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default History;
