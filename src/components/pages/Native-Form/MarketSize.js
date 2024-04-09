import React, { useState, useEffect } from "react";

const Market = ({ formData, handleChange }) => {
  const [showOtherSector, setShowOtherSector] = useState(false);

  useEffect(() => {
    // Check if the selected sector is 'Others' to show the text box for specifying other sector
    setShowOtherSector(formData.sector === "Others");
  }, [formData.sector]);

  return (
    <>
      <br />
      <div className="selectInputQuestions">
        <label htmlFor="sector">Which sector do you operate in?*</label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          required
        >
          <option value="">Select Sector</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Construction & Design">Construction & Design</option>
          <option value="Education">Education</option>
          <option value="Energy">Energy</option>
          <option value="Finance">Finance</option>
          <option value="Government/Public Sector">
            Government/Public Sector
          </option>
          <option value="Healthcare">Healthcare</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Media and Entertainment">
            Media and Entertainment
          </option>
          <option value="Non-profit/NGO">Non-profit/NGO</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Restaurants & Food Service">
            Restaurants & Food Service
          </option>
          <option value="Retail">Retail</option>
          <option value="Technology">Technology</option>
          <option value="Tourism & Travel">Tourism & Travel</option>
          <option value="Transportation">Transportation</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="textInputQuestions">
        {showOtherSector && (
          <>
            <br />
            <label htmlFor="otherSector">Specify other sector*</label>
            <input
              type="text"
              id="otherSector"
              name="otherSector"
              value={formData.otherSector}
              onChange={handleChange}
              placeholder="If you have selected 'Others', Please specify here."
              required
            />
          </>
        )}
      </div>
      <br />
      <div className="textareaInputQuestions">
        <label htmlFor="marketDescription">
          Can you provide a detailed description of the current market for your
          products or services?*
        </label>
        <textarea
          id="marketDescription"
          name="marketDescription"
          value={formData.marketDescription}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <div className="textInputQuestions">
        <label htmlFor="TAM">
          What is your total addressable market (TAM) in million USD?
        </label>
        <input
          type="number"
          id="TAM"
          name="TAM"
          value={formData.TAM}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="textInputQuestions">
        {formData.TAM && (
          <>
            <label htmlFor="TAMGrowthRate">
              Please enter the annual growth rate for TAM.
            </label>
            <input
              type="number"
              id="TAMGrowthRate"
              name="TAMGrowthRate"
              value={formData.TAMGrowthRate}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <br />
      <div className="textInputQuestions">
        <label htmlFor="SAM">
          What is your serviceable addressable market (SAM) in million USD?
        </label>
        <input
          type="number"
          id="SAM"
          name="SAM"
          value={formData.SAM}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="textInputQuestions">
        {formData.SAM && (
          <>
            <label htmlFor="SAMGrowthRate">
              Please enter the annual growth rate for SAM.
            </label>
            <input
              type="number"
              id="SAMGrowthRate"
              name="SAMGrowthRate"
              value={formData.SAMGrowthRate}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <br />
    </>
  );
};

export default Market;
