import React from "react";

const Track = ({ formData, handleChange }) => {
  // Function to generate an array of years for the dropdown options
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 15; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  return (
    <div>
      <div>
        <label htmlFor="phase1">Phase 1:</label>
        <div>
          <label htmlFor="phase1UpperBound">From</label>
          <select
            id="phase1UpperBound"
            name="phase1UpperBound"
            value={formData.phase1UpperBound}
            onChange={handleChange}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="phase1LowerBound">To</label>
          <select
            id="phase1LowerBound"
            name="phase1LowerBound"
            value={formData.phase1LowerBound}
            onChange={handleChange}
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
            id="phase1Timeline"
            name="phase1Timeline"
            value={formData.phase1Timeline}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phase2">Phase 2:</label>
        <div>
          <label htmlFor="phase2UpperBound">From</label>
          <select
            id="phase2UpperBound"
            name="phase2UpperBound"
            value={formData.phase2UpperBound}
            onChange={handleChange}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="phase2LowerBound">To</label>
          <select
            id="phase2LowerBound"
            name="phase2LowerBound"
            value={formData.phase2LowerBound}
            onChange={handleChange}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="phase2Timeline">Track Record</label>
          <textarea
            id="phase2Timeline"
            name="phase2Timeline"
            value={formData.phase2Timeline}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phase3">Phase 3:</label>
        <div>
          <label htmlFor="phase3UpperBound">From</label>
          <select
            id="phase3UpperBound"
            name="phase3UpperBound"
            value={formData.phase3UpperBound}
            onChange={handleChange}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label htmlFor="phase3LowerBound">To</label>
          <select
            id="phase3LowerBound"
            name="phase3LowerBound"
            value={formData.phase3LowerBound}
            onChange={handleChange}
          >
            {generateYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="phase3Timeline">Track Record</label>
          <textarea
            id="phase3Timeline"
            name="phase3Timeline"
            value={formData.phase3Timeline}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Track;
