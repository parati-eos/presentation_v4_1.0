import React, { useState, useEffect } from "react";
import close from "../../Asset/close.png";

const Competition = ({ formData, handleChange }) => {
  const minCompetitorFields = 4; // Minimum number of competitor fields to display by default

  // Initialize competitors state with the data from formData or with initial empty values
  const initialCompetitors = formData.competitors || Array.from({ length: minCompetitorFields }, () => "");

  const [competitors, setCompetitors] = useState(initialCompetitors);

  useEffect(() => {
    // Update formData whenever competitors state changes
    handleChange({
      target: {
        name: "competitors",
        value: competitors,
      },
    });
  }, [competitors, handleChange]);

  const handleCompetitorChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    setCompetitors(updatedCompetitors);
  };

  const addCompetitorRow = () => {
    if (competitors.length < 6) {
      setCompetitors([...competitors, ""]); // Add an empty competitor
    }
  };

  const removeCompetitorRow = (index) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors.splice(index, 1); // Remove competitor at the specified index
    setCompetitors(updatedCompetitors);
  };

  // Ensure there are at least minCompetitorFields number of competitors displayed
  while (competitors.length < minCompetitorFields) {
    addCompetitorRow();
  }

  return (
    <>
       <label htmlFor="trackOverview">
        Can you provide company's track record in terms of traction across different phases and their timeline?*
      </label>
      {competitors.map((competitor, index) => (
        <div key={index} className="competitor-row">
          <br />
          <br />
          <div className="competitor">
            <input
              type="text"
              placeholder={`Competitor ${index + 1}`}
              value={competitor}
              onChange={(e) => handleCompetitorChange(index, e.target.value)}
              required
            />
          </div>
          {competitors.length > minCompetitorFields && (
            <div
              className="close-button-competition"
              type="button"
              onClick={() => removeCompetitorRow(index)}
            >
              <img src={close} alt="Close" />
            </div>
          )}
        </div>
      ))}
      {competitors.length < 6 && (
        <>
          <br />
          <button
            type="button"
            onClick={addCompetitorRow}
            className="add-row-button"
          >
            Add Competitor
          </button>
        </>
      )}
    </>
  );
};

export default Competition;
