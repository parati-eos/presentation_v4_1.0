import React from "react";

const CompetitiveDiff = ({ formData, handleChange }) => {
  return (
    <>
      <label>
        What factors differentiate your products or services from those of your
        key competitors?*
      </label>
      <textarea
        style={{ height: "290px" }}
        name="competitiveDiff"
        value={formData.competitiveDiff}
        onChange={handleChange}
        placeholder="Enter your response here..."
        required
      />
      <br />
    </>
  );
};

export default CompetitiveDiff;
