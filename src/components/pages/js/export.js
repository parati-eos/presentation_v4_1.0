// ExportButton.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faDownload} from '@fortawesome/free-solid-svg-icons';

const ExportButton = ({ onClick }) => {
  return (
    <button className="button-with-icon" onClick={onClick}>
      <span className="icon download-icon" />
      <FontAwesomeIcon icon={faDownload} />
      Export
    </button>
  );
};

export default ExportButton;
