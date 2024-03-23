import React from 'react';

const Product = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="productOverview">Can you provide an overview of the products and services your company offers?</label>
      <textarea
        id="productOverview"
        name="productOverview"
        value={formData.productOverview}
        onChange={handleChange}
        required
      />

      <label htmlFor="productRoadmap">Do you have a product roadmap in place?</label>
      <select
        id="productRoadmap"
        name="productRoadmap"
        value={formData.productRoadmap}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {formData.productRoadmap === 'Yes' && (
        <textarea
          id="productRoadmapDescription"
          name="productRoadmapDescription"
          value={formData.productRoadmapDescription}
          onChange={handleChange}
          placeholder="Please describe your product roadmap."
        />
      )}

      <label htmlFor="technicalArchitecture">Can you provide a high-level overview of the technical architecture of your product or service?</label>
      <textarea
        id="technicalArchitecture"
        name="technicalArchitecture"
        value={formData.technicalArchitecture}
        onChange={handleChange}
      />
    </>
  );
};

export default Product;
