import React, { useState } from "react";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function to upload files to S3

const ProductScreen = ({ formData, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option
  const [isMobileApp, setIsMobileApp] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // State to store uploaded image URL

  const handleAppTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // Update selected option state

    // Check if the selected option is "None"
    if (selectedValue === "") {
      setIsMobileApp(null); // Set isMobileApp state to null for "None" option
    } else {
      setIsMobileApp(selectedValue === "mobile"); // Set isMobileApp state based on selected value
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
        setUploadedImageUrl(imageUrl); // Set the uploaded image URL in the state
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <>
      <label htmlFor="appType">
        Is your product interface a mobile application or a web application?
      </label>
      <select
        id="appType"
        name="appType"
        value={selectedOption} // Use selectedOption state instead of isMobileApp
        onChange={handleAppTypeChange}
      >
        <option value="">None</option>
        <option value="web">Web Application</option>
        <option value="mobile">Mobile Application</option>
      </select>
      <br />
      {isMobileApp !== null && (
        <>
          {isMobileApp ? (
            <>
              <label htmlFor="mobileScreenshots">
                Please upload 3 Mobile App UI screenshots here -
              </label>
              <input
                type="file"
                id="mobileScreenshots"
                name="mobileScreenshots"
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </>
          ) : (
            <>
              <label htmlFor="webScreenshots">
                Please upload 3 Web App UI screenshots here -
              </label>
              <input
                type="file"
                id="webScreenshots"
                name="webScreenshots"
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </>
          )}
        </>
      )}
      <br />
      {/* Display the uploaded image URL if available */}
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image URL - </p>
          <img src={uploadedImageUrl} alt="Uploaded Screenshot" />
        </div>
      )}
      <br />
    </>
  );
};

export default ProductScreen;
