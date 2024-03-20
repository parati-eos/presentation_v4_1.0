// Product.js
import React from 'react';

const Product = ({ formData, handleChange }) => {
  const handleInterfaceChange = (e) => {
    const { value } = e.target;
    handleChange(e); // Call handleChange to update formData with the selected interface
    // Additional logic to handle UI screenshot upload visibility based on interface selection
    if (value === 'Mobile App' || value === 'Both') {
      // Show mobile UI screenshot upload
      document.getElementById('mobileScreenshots').style.display = 'block';
      document.getElementById('webScreenshots').style.display = 'none'; // Hide web UI screenshot upload
    } else if (value === 'Web App') {
      // Show web UI screenshot upload
      document.getElementById('mobileScreenshots').style.display = 'none'; // Hide mobile UI screenshot upload
      document.getElementById('webScreenshots').style.display = 'block';
    } else {
      // Hide both UI screenshot uploads
      document.getElementById('mobileScreenshots').style.display = 'none';
      document.getElementById('webScreenshots').style.display = 'none';
    }
  };

  return (
    <>
      <label htmlFor="productOverview">Can you provide an overview of the products and services your company offers? (Long Text Properties. Mandatory)</label>
      <textarea id="productOverview" name="productOverview" value={formData.productOverview} onChange={handleChange} required />
      <br />
      <label htmlFor="productRoadmap">Do you have a product roadmap in place?</label>
      <select id="productRoadmap" name="productRoadmap" value={formData.productRoadmap} onChange={handleChange}>
        <option value="">Select Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {formData.productRoadmap === 'Yes' && (
        <div>
          <label htmlFor="productRoadmapDescription">Please describe the product roadmap:</label>
          <textarea id="productRoadmapDescription" name="productRoadmapDescription" value={formData.productRoadmapDescription} onChange={handleChange} />
        </div>
      )}
      <br />
      <label htmlFor="productInterface">Is your product interface a mobile application or a web application? (Mandatory)</label>
      <select id="productInterface" name="productInterface" value={formData.productInterface} onChange={handleInterfaceChange} required>
        <option value="">Select Option</option>
        <option value="Mobile App">Mobile App</option>
        <option value="Web App">Web App</option>
        <option value="Both">Both</option>
        <option value="None">None</option>
      </select>
      <br />
      <div id="mobileScreenshots" style={{ display: formData.productInterface === 'Mobile App' || formData.productInterface === 'Both' ? 'block' : 'none' }}>
        <label htmlFor="mobileScreenshots">Please upload 3 Mobile App UI screenshots here (Allowed formats: pdf, jpg, jpeg, png, webp)</label>
        <input type="file" id="mobileScreenshots" name="mobileScreenshots" accept=".pdf,.jpg,.jpeg,.png,.webp" multiple />
      </div>
      <div id="webScreenshots" style={{ display: formData.productInterface === 'Web App' || formData.productInterface === 'Both' ? 'block' : 'none' }}>
        <label htmlFor="webScreenshots">Please upload 3 Web App UI screenshots here (Allowed formats: pdf, jpg, jpeg, png, webp)</label>
        <input type="file" id="webScreenshots" name="webScreenshots" accept=".pdf,.jpg,.jpeg,.png,.webp" multiple />
      </div>
      <br />
      <label htmlFor="technicalArchitecture">Can you provide a high-level overview of the technical architecture of your product or service? (Non-mandatory field)</label>
      <textarea id="technicalArchitecture" name="technicalArchitecture" value={formData.technicalArchitecture} onChange={handleChange} />
    </>
  );
}

export default Product;
