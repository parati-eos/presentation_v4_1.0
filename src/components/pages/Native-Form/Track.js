import { React, useState } from "react";

const Track = ({ formData, handleChange }) => {
  const [phaseRows, setPhaseRows] = useState([
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
  ]);
  // Function to generate an array of years for the dropdown options
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 15; i <= currentYear; i++) {
      years.push(i);
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
  };
  return (
    <div className="textInputQuestions">
      <label htmlFor="productOverview">
        Can you provide company's track record in terms of traction across
        different phases and their timeline?
      </label>
      {phaseRows.map((row, index) => (
        <div className="trackRecord-details">
          <label htmlFor="phase1">{`Phase ${index + 1}`}</label>
          <div className="trackRecord-to-from">
            <label htmlFor="phase1UpperBound">From</label>
            <select
              id="year1"
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
            <label htmlFor="phase1LowerBound">To</label>
            <select
              id="year2"
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
            <label htmlFor="phase1Timeline">Track Record</label>
            <textarea
              id="TR"
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
