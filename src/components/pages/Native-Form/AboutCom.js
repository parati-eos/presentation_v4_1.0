import React from 'react';

const AboutCompany = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="companyName">What is the name of your company?</label>
      <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
      <br />
      <label htmlFor="tagline">What is the company's tagline?</label>
      <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} required />
      <label htmlFor="logo">Please upload your logo (PDF, JPG, JPEG, PNG, WEBP)</label>
      <input type="file" id="logo" name="logo" accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={handleChange} required />
      <label htmlFor="primaryColor">Please select your primary branding color</label>
      <input type="color" id="primaryColor" name="primaryColor" value={formData.primaryColor} onChange={handleChange} />
      <label htmlFor="secondaryColor">Please select your secondary branding color</label>
      <input type="color" id="secondaryColor" name="secondaryColor" value={formData.secondaryColor} onChange={handleChange} required />
      <br />
    </>
  );
}

export default AboutCompany;
