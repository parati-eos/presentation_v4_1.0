import React, { useState } from "react";
import close from "../../Asset/close.png";

const Competition = ({ formData, setFormData }) => {
  const [competitors, setCompetitors] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    setCompetitors(updatedCompetitors);
    setFormData((prevState) => ({
      ...prevState,
      competitors: updatedCompetitors,
    }));
  };
  const removeCompetitorRow = (index) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors.splice(index, 1);
    setCompetitors(updatedCompetitors);
    setFormData((prevState) => ({
      ...prevState,
      competitors: updatedCompetitors,
    }));
  };
  const addRow = (e) => {
    e.preventDefault(); // Prevent form submission
    if (competitors.length < 6) {
      setCompetitors((prevCompetitors) => [...prevCompetitors, ""]);
    }
  };

  return (
    <div>
      <br />
      <label>
        Who would you consider to be your company's top competitors in the
        market? List at least 4 of them.*
      </label>
      {competitors.map((competitor, index) => (
        <div key={index} className="textInputQuestions">
          <input
            placeholder={`Competitor ${index + 1}`}
            type="text"
            value={competitor}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          {competitors.length > 4 && (
            <div
              className="close-button"
              type="button"
              onClick={() => removeCompetitorRow(index)}
            >
              <img src={close}></img>
            </div>
          )}
          <br />
          <br />
        </div>
      ))}
      {competitors.length < 6 && (
        <button className="add-row-button" onClick={addRow}>
          Add Row
        </button>
      )}
    </div>
  );
};

export default Competition;
