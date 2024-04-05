import React, { useState } from "react";

const Track = ({ formData, handleChange }) => {
  const [phaseRows, setPhaseRows] = useState(formData.trackRecord || [
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
  ]);

  const [isFormValid, setIsFormValid] = useState(false); // State to track form validation

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = ["Select Year"];
    for (let i = currentYear - 15; i <= currentYear; i++) {
      if (i === 2009) {
        years.push(i);
      } else {
        years.push(i.toString());
      }
    }
    return years;
  };

  const handlePhaseRowsChange = (index, field, value) => {
    const updatedPhaseRows = [...phaseRows];
    updatedPhaseRows[index][field] = value;
    setPhaseRows(updatedPhaseRows);
    handleChange({
      target: {
        name: "trackRecord",
        value: updatedPhaseRows,
      },
    });

    // Check if all fields are filled to set form validity
    const isAllFilled = updatedPhaseRows.every(
      (row) => row.year1 && row.year2 && row.TR
    );
    setIsFormValid(isAllFilled);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Pass data to DB or perform other actions
      console.log("Form submitted with valid data:", phaseRows);
    } else {
      console.log("Please fill in all details before submitting.");
    }
  };

  return (
    <div>
      <label htmlFor="tagline">Can you provide company's track record in terms of traction across different phases and their timeline?</label>
      {phaseRows.map((row, index) => (
        <div key={index}>
          <label htmlFor={`phase${index + 1}`}>{`Phase ${index + 1}`}</label>
          <div>
            <label htmlFor={`phase${index + 1}UpperBound`}>From</label>
            <select
              id={`year1-${index}`}
              name="year1"
              value={row.year1}
              onChange={(e) =>
                handlePhaseRowsChange(index, "year1", e.target.value)
              }
            >
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label htmlFor={`phase${index + 1}LowerBound`}>To</label>
            <select
              id={`year2-${index}`}
              name="year2"
              value={row.year2}
              onChange={(e) =>
                handlePhaseRowsChange(index, "year2", e.target.value)
              }
            >
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`phase${index + 1}Timeline`}>Track Record</label>
            <textarea
              id={`TR-${index}`}
              name="TR"
              value={row.TR}
              onChange={(e) =>
                handlePhaseRowsChange(index, "TR", e.target.value)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Track;
