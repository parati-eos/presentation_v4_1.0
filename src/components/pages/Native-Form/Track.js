import React, { useState, useContext } from "react";

// Create context for track records data
const TrackDataContext = React.createContext();

// Custom hook to use track records context
const useTrackData = () => {
  return useContext(TrackDataContext);
};

// Track Provider component
const TrackProvider = ({ children }) => {
  const [phaseRows, setPhaseRows] = useState([
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
  ]);

  const updatePhaseRows = (rows) => {
    setPhaseRows(rows);
  };

  return (
    <TrackDataContext.Provider value={{ phaseRows, updatePhaseRows }}>
      {children}
    </TrackDataContext.Provider>
  );
};

const Track = () => {
  const { phaseRows, updatePhaseRows } = useTrackData();

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
    updatePhaseRows(updatedPhaseRows);
  };

  return (
    <div>
      <label htmlFor="productOverview">
        Can you provide company's track record in terms of traction across different phases and their timeline?
      </label>
      {phaseRows.map((row, index) => (
        <div key={index}>
          <label htmlFor={`phase${index + 1}`}>{`Phase ${index + 1}`}</label>
          <div>
            <label htmlFor={`phase${index + 1}UpperBound`}>From</label>
            <select
              id={`year1-${index}`}
              name={`year1-${index}`}
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
              name={`year2-${index}`}
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
              name={`TR-${index}`}
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

export { Track, TrackProvider, useTrackData };
