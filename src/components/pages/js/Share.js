// ShareButton.js

import React from "react";
import '../css/share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';
const ShareButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="sharebutton">
              <FontAwesomeIcon icon={faShareAlt}/> Share
    </button>
  );
};

export default ShareButton;

