import React from 'react';

const Case = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="caseStudies">Could you provide examples of successful case studies from your clients, showcasing how your products or services have made a positive impact on their businesses?</label>
      <textarea
        id="caseStudies"
        name="caseStudies"
        value={formData.caseStudies}
        onChange={handleChange}
        rows={6}
      />
    </div>
  );
};

export default Case;
