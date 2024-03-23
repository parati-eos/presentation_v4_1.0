import React from 'react';

const Track = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="trackRecord">Can you provide company's track record in terms of traction across different phases and their timeline?</label>
      <input
        type="text"
        id="trackRecord"
        name="trackRecord"
        value={formData.trackRecord}
        onChange={handleChange}
      />
    </div>
  );
};

export default Track;
