import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function for uploading files to S3

const AboutCompany = ({ formData, handleChange, handleNext }) => {
  const [logoUrl, setLogoUrl] = useState(formData.logo || null); // Initialize with formData.logo if available
  const [fileInputKey, setFileInputKey] = useState(0); // Key to reset file input

  useEffect(() => {
    // Update logoUrl if formData.logo changes
    setLogoUrl(formData.logo || null);
  }, [formData.logo]);

  const handleLogoChange = async (e) => {
    const file = e.target.files[0];
    try {
      const logoUrl = await uploadFileToS3(file); // Upload the logo file to S3
      setLogoUrl(logoUrl); // Set the URL of the uploaded logo
      handleChange({ target: { name: "logo", value: logoUrl } }); // Update form data with the logo URL
    } catch (error) {
      console.error("Error uploading logo:", error);
    }
  };

  const handleRemoveLogo = () => {
    setLogoUrl(null);
    handleChange({ target: { name: "logo", value: null } });
    setFileInputKey((prevKey) => prevKey + 1); // Reset file input
  };

  const handlePrimaryColorChange = (color) => {
    handleChange({ target: { name: "primaryColor", value: color } });
  };

  const handleSecondaryColorChange = (color) => {
    handleChange({ target: { name: "secondaryColor", value: color } });
  };

  const handleContinue = () => {
    if (logoUrl) {
      // Proceed to the next section only if the logo is uploaded
      handleNext(formData);
    } else {
      alert("Please upload the logo before continuing.");
    }
  };

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
        />
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label htmlFor="logo">Please upload your logo (PDF, JPG, JPEG, PNG, WEBP)*</label>
        {logoUrl ? (
          <div>
            <p>Selected file: {logoUrl}</p>
            <button onClick={handleRemoveLogo}>Remove</button>
          </div>
        ) : (
          <input
            key={fileInputKey}
            type="file"
            id="logo"
            name="logo"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={handleLogoChange}
            required
          />
        )}
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
            handleChange={handlePrimaryColorChange}
          />
        </div>
        <div className="secondary-color">
          <label htmlFor="secondaryColor">Select secondary branding color*</label>
          <ColorPicker
            id="secondaryColor"
            name="secondaryColor"
            color={formData.secondaryColor}
            handleChange={handleSecondaryColorChange}
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default AboutCompany;
