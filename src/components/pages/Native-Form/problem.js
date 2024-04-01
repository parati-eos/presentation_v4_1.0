import React from "react";

const Problem = ({ formData, handleChange }) => {
  return (
    <>
      <br />
      <label htmlFor="problemDescription">
        What inspired the establishment of your startup, and what specific
        problems do you aim to solve with your products or services in the
        market?*
      </label>
      <textarea
        style={{ height: "260px" }}
        id="problemDescription"
        name="problemDescription"
        value={formData.problemDescription}
        onChange={handleChange}
        required
      />
      <br />
    </>
  );
};

export default Problem;
