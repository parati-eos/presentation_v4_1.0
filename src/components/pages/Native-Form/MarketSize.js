// MarketSize.js
import React from 'react';

const MarketSize = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="sector">Which sector do you operate in? *</label>
      <select id="sector" name="sector" value={formData.sector} onChange={handleChange} required>
        <option value="">Select Sector</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Construction & Design">Construction & Design</option>
        <option value="Education">Education</option>
        <option value="Energy">Energy</option>
        <option value="Finance">Finance</option>
        <option value="Government/Public Sector">Government/Public Sector</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Hospitality">Hospitality</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Media and Entertainment">Media and Entertainment</option>
        <option value="Non-profit/NGO">Non-profit/NGO</option>
        <option value="Real Estate">Real Estate</option>
        <option value="Restaurants & Food Service">Restaurants & Food Service</option>
        <option value="Retail">Retail</option>
        <option value="Technology">Technology</option>
        <option value="Tourism & Travel">Tourism & Travel</option>
        <option value="Transportation">Transportation</option>
        <option value="Others">Others</option>
      </select>
      {formData.sector === 'Others' && (
        <div>
          <label htmlFor="othersDescription">If Others, please specify:</label>
          <input type="text" id="othersDescription" name="othersDescription" value={formData.othersDescription} onChange={handleChange} />
        </div>
      )}
      <br />
      <label htmlFor="marketDescription">Can you provide a detailed description of the current market for your products or services? *</label>
      <textarea id="marketDescription" name="marketDescription" value={formData.marketDescription} onChange={handleChange} required />
      <br />
      <label htmlFor="TAM">What is your total addressable market (TAM) in million USD? *</label>
      <input type="number" id="TAM" name="TAM" value={formData.TAM} onChange={handleChange} placeholder="Values in Million USD" required />
      <br />
      <label htmlFor="TAMGrowthRate">Please enter the annual growth rate for TAM (%)</label>
      <input type="number" id="TAMGrowthRate" name="TAMGrowthRate" value={formData.TAMGrowthRate} onChange={handleChange} placeholder="%" />
      <br />
      <label htmlFor="SAM">What is your serviceable addressable market (SAM) in million USD?</label>
      <input type="number" id="SAM" name="SAM" value={formData.SAM} onChange={handleChange} placeholder="Values in Million USD" />
      <br />
      <label htmlFor="SAMGrowthRate">Please enter the annual growth rate for SAM (%)</label>
      <input type="number" id="SAMGrowthRate" name="SAMGrowthRate" value={formData.SAMGrowthRate} onChange={handleChange} placeholder="%" />
    </>
  );
}

export default MarketSize;
