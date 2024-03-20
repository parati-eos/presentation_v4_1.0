// ExportButton.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons';
import "../css/share.css"

const ExportButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="exportbutton" >
    <FontAwesomeIcon icon={faDownload}/> Export 
  </button>
  );
};  

export default ExportButton;
