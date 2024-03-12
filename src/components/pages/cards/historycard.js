import React from "react";
import "./historycard.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons';
import shareimage  from '../../Asset/share.png'// Import CSS file for styling

const HistoryCard = ({
  name = "hi",
  dateCreated = "1234",
  formLink = "asdasd",
  imageUrl = "https://picsum.photos/200",
}) => {
  return (
    <div>

      <div className="card">
        <div className="card-image">
          <img src={imageUrl} alt="Image" />
        </div>
        <div className="card-content">
          <h2>Name: <span>{name}</span></h2>
          <h2>Date Created: <span>{dateCreated}</span></h2>
          <h2>Form Link: <a src={formLink}>{formLink}</a></h2>
          <div className="card-buttons">
          <button onClick={''} className="sharebutton">
            <FontAwesomeIcon icon={faShareAlt} /> Share
          </button>
          <button onClick={''}className="exportbutton" >
            <FontAwesomeIcon icon={faDownload} /> Export
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
