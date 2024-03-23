import React from 'react';

const Solutions = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="solutionsDescription">What solutions is your company offering to address the identified problems for the target market?</label>
      <textarea
        id="solutionsDescription"
        name="solutionsDescription"
        value={formData.solutionsDescription}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default Solutions;
