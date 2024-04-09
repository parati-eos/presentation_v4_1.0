import React, { useState } from "react";

const GTM = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <label htmlFor="keyStakeholders">
          Who are the key stakeholders of your business and how do they benefit
          from it? List at least 2 of them.*
        </label>
        <textarea
          id="keyStakeholders"
          name="keyStakeholders"
          value={formData.keyStakeholders}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <br />
      <div className="textInputQuestions">
        <label htmlFor="customerPersona">
          Describe your customer persona in terms of their demographic, and
          behavioral characteristics such as age, gender, location, income
          level, interests, etc.
        </label>
        <textarea
          id="customerPersona"
          name="customerPersona"
          value={formData.customerPersona}
          onChange={handleChange}
        ></textarea>
      </div>
      <br />
      <div className="textInputQuestions">
        <label htmlFor="goToMarketStrategy">
          What are the key components of your Go-to-Market strategy, including
          your approach to product positioning?*
        </label>
        <textarea
          id="goToMarketStrategy"
          name="goToMarketStrategy"
          value={formData.goToMarketStrategy}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <br />
    </>
  );
};

export default GTM;
