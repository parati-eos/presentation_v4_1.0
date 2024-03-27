import React from "react";
import ColorPicker from "./ColorPicker"; // Assuming ColorPicker component is in ColorPicker.js

const AboutCompany = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <label htmlFor="companyName">What is the name of your company?*</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label htmlFor="tagline">What is the company's tagline?</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label htmlFor="logo">
          Please upload your logo (PDF, JPG, JPEG, PNG, WEBP)*
        </label>
        <input
          type="file"
          id="logo"
          name="logo"
          accept=".pdf,.jpg,.jpeg,.png,.webp"
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <br />
      <div className="color-picker">
        <div className="primary-color">
          <label htmlFor="primaryColor">Select primary branding color*</label>
          <ColorPicker
            id="primaryColor"
            name="primaryColor"
            color={formData.primaryColor}
            handleChange={(color) =>
              handleChange({ target: { name: "primaryColor", value: color } })
            }
          />
        </div>
        <div className="secondary-color">
          <label htmlFor="secondaryColor">
            Select secondary branding color*
          </label>
          <ColorPicker
            id="secondaryColor"
            name="secondaryColor"
            color={formData.secondaryColor}
            handleChange={(color) =>
              handleChange({ target: { name: "secondaryColor", value: color } })
            }
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default AboutCompany;
