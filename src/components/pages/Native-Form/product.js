import React from "react";

const Product = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="productOverview">
        Can you provide an overview of the products and services your company
        offers?*
      </label>
      <textarea
        id="productOverview"
        name="productOverview"
        value={formData.productOverview}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="productRoadmapDescription">
        Do you have a product roadmap in place? If yes, please describe your
        product roadmap.
      </label>
      <textarea
        id="productRoadmapDescription"
        name="productRoadmapDescription"
        value={formData.productRoadmapDescription}
        onChange={handleChange}
        placeholder="Please describe your product roadmap."
        required
      />
      <br />
      <label htmlFor="technicalArchitecture">
        Can you provide a high-level overview of the technical architecture of
        your product or service?
      </label>
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
