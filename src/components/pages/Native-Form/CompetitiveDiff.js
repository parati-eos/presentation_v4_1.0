import React from "react";

const CompetitiveDiff = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <label>
          What factors differentiate your products or services from those of
          your key competitors?*
        </label>
        <textarea
          style={{ height: "290px" }}
          name="competitiveDiff"
          value={formData.competitiveDiff}
          onChange={handleChange}
          placeholder="Enter your response here..."
          required
        />
      </div>
      <br />
    </>
  );
};

export default CompetitiveDiff;
