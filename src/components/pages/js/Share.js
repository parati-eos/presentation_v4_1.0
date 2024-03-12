// ShareButton.js

import React from "react";
import "../css/share.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';
const ShareButton = ({ onClick }) => {
  return (
    <button className="button-with-icon" onClick={onClick}>
      <span className="icon share-icon" />
      <FontAwesomeIcon icon={faShareAlt} /> Share
    </button>
  );
};

export default ShareButton;

