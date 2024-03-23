import React from 'react';

const CompetitiveDiff = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Competitive Differentiation</h2>
      <label>
        Factors that differentiate your products/services:
        <textarea 
          name="competitiveDiff" 
          value={formData.competitiveDiff} 
          onChange={handleChange} 
          rows={6} 
          cols={50} 
          placeholder="Enter your response here..."
        />
      </label>
    </div>
  );
};

export default CompetitiveDiff;
