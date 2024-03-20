

import React from 'react';

const AboutCompany = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="companyName">What is the name of your company?</label>
      <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
      <br />
      <label htmlFor="establishmentYear">In what year was your company established?</label>
      <select id="establishmentYear" name="establishmentYear" value={formData.establishmentYear} onChange={handleChange} required>
        <option value="">Select Year</option>
        {Array.from({ length: 8 }, (_, i) => 2017 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <br />
      <label htmlFor="companyOverview">Could you provide a comprehensive overview of your company?</label>
      <textarea id="companyOverview" name="companyOverview" value={formData.companyOverview} onChange={handleChange} required />
      <br />
      <label htmlFor="tagline">What is the company's tagline?</label>
      <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} required />
    </>
  );
}

export default AboutCompany;

