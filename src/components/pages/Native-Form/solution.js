import React from "react";

const Solutions = ({ formData, handleChange }) => {
  return (
    <>
      <br />
      <label htmlFor="solutionsDescription">
        What solutions is your company offering to address the identified
        problems for the target market?*
      </label>
      <textarea
        style={{ height: "260px" }}
        id="solutionsDescription"
        name="solutionsDescription"
        value={formData.solutionsDescription}
        onChange={handleChange}
        required
      />
      <br />
    </>
  );
};

export default Solutions;
