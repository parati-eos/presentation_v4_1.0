import React, { useState } from "react";

const Competition = ({ formData, handleChange }) => {
  const [competitors, setCompetitors] = useState([
    "", // Initial competitor
  ]);

  const handleCompetitorChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    setCompetitors(updatedCompetitors);
    handleChange({
      target: {
        name: "competitors",
        value: updatedCompetitors,
      },
    });
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
    handleChange({
      target: {
        name: "competitors",
        value: updatedCompetitors,
      },
    });
  };

  return (
    <>
      {competitors.map((competitor, index) => (
        <div key={index} className="textInputQuestions">
          <br />
          <input
            type="text"
            placeholder={`Competitor ${index + 1}`}
            value={competitor}
            onChange={(e) => handleCompetitorChange(index, e.target.value)}
          />
          {competitors.length > 2 && (
            <button type="button" onClick={() => removeCompetitorRow(index)}>
              Remove
            </button>
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
