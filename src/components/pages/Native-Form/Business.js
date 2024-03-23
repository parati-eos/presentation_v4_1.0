import React from 'react';

const Business = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="businessModel">What is your business model? Please describe your revenue streams:</label>
      <textarea
        id="businessModel"
        name="businessModel"
        value={formData.businessModel}
        onChange={handleChange}
        rows={5}
        cols={50}
        required
      />
    </div>
  );
};

export default Business;
