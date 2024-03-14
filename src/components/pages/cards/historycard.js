import React, { useState } from "react";
import "./historycard.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import ShareButton from "../js/Share.js";
import ExportButton from "../js/export.js";

const HistoryCard = ({
  userID,
  submissionID,
  PPTName,
  Date,
  link,
}) => {
  const [editableName, setEditableName] = useState(PPTName);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setEditableName(e.target.value);
  };

  const handleSave = async() => {
    setIsEditing(false);
   
    const requestBody = {
      userID: userID,
      formID: submissionID,
      newColumnValue: editableName
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/updateRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        console.log('Row updated successfully');
        alert('Row updated successfully')
      } else {
        console.error('Failed to update row');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <iframe src={`https://docs.google.com/presentation/d/${link}/embed?rm=minimal&start=true&loop=true`} />
        </div>
        <div className="card-content">
          <div className="card-header">
            {isEditing ? (
              <input type="text" value={editableName} onBlur={handleSave} onChange={handleNameChange} />
            ) : (
              <h2 onClick={() => setIsEditing(true)}>Name: <span>{editableName}</span></h2>
            )}
          </div>
          <h2>Date Created: <span>{Date}</span></h2>
          <h2>Form Link: <a href={link}>link</a></h2>
          <div className="card-buttons">
            <button onClick={''} className="sharebutton">
              <FontAwesomeIcon icon={faShareAlt}/> Share
            </button>
            <button onClick={''} className="exportbutton" >
              <FontAwesomeIcon icon={faDownload}/> Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
 