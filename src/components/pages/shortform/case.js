import React from "react";

const Case = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <label htmlFor="caseStudies">
          Could you provide examples of successful case studies from your
          clients, showcasing how your products or services have made a positive
          impact on their businesses?
        </label>
        <textarea
          style={{ height: "270px" }}
          id="caseStudies"
          name="caseStudies"
          value={formData.caseStudies}
          onChange={handleChange}
          rows={6}
        />
      </div>
      <br />
    </>
  );
};

export default Case;
