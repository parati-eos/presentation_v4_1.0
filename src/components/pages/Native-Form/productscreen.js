import React, { useState } from 'react';
import uploadFileToS3 from './uploadFileToS3'; // Import the function to upload files to S3

const ProductScreen = ({ formData, handleChange }) => {
  const [isMobileApp, setIsMobileApp] = useState(true);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // State to store uploaded image URL

  const handleAppTypeChange = (e) => {
    setIsMobileApp(e.target.value === 'mobile');
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
        setUploadedImageUrl(imageUrl); // Set the uploaded image URL in the state
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
      <label htmlFor="appType">Is your product interface a mobile application or a web application?</label>
      <select id="appType" name="appType" value={isMobileApp ? 'mobile' : 'web'} onChange={handleAppTypeChange}>
        <option value="web">Web Application</option>
        <option value="mobile">Mobile Application</option>
      </select>

      {isMobileApp ? (
        <>
          <label htmlFor="mobileScreenshots">Please upload 3 Mobile App UI screenshots here:</label>
          <input type="file" id="mobileScreenshots" name="mobileScreenshots" multiple onChange={handleFileChange} accept="image/*" />
        </>
      ) : (
        <>
          <label htmlFor="webScreenshots">Please upload 3 Web App UI screenshots here:</label>
          <input type="file" id="webScreenshots" name="webScreenshots" multiple onChange={handleFileChange} accept="image/*" />
        </>
      )}

      {/* Display the uploaded image URL if available */}
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <img src={uploadedImageUrl} alt="Uploaded Screenshot" />
        </div>
      )}
    </>
  );
};

export default ProductScreen;

