// Problem.js
import React from 'react';

const ProblemsAndSolutions = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="inspiration">What inspired the establishment of your startup, and what specific problems do you aim to solve with your products or services in the market?</label>
      <textarea id="inspiration" name="inspiration" value={formData.inspiration} onChange={handleChange} required />
      <br />
      <label htmlFor="solutions">What solutions is your company offering to address the identified problems for the target market?</label>
      <textarea id="solutions" name="solutions" value={formData.solutions} onChange={handleChange} required />
    </>
  );
}

export default ProblemsAndSolutions;
