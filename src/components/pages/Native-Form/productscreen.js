import React, { useState } from "react";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function to upload files to S3

const ProductScreen = ({ formData, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option
  const [isMobileApp, setIsMobileApp] = useState(null);
  const [isWebApp, setIsWebApp] = useState(null);
  const [WebUploadedImageUrl, setWebUploadedImageUrl] = useState([]); // State to store uploaded image URLs for web
  const [MobileUploadedImageUrl, setMobileUploadedImageUrl] = useState([]); // State to store uploaded image URLs for mobile

  const handleAppTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // Update selected option state
    setIsMobileApp(selectedValue === "mobile" || selectedValue === "both");
    setIsWebApp(selectedValue === "web" || selectedValue === "both");
    setWebUploadedImageUrl([]); // Reset uploaded image URLs for web
    setMobileUploadedImageUrl([]); // Reset uploaded image URLs for mobile
  };

  const handleFileChange = async (e, isWeb) => {
    const files = e.target.files;
    const uploadedImageUrls = [];
    try {
      // Check if the total number of uploaded images exceeds 3
      if ((isWeb && WebUploadedImageUrl.length + files.length > 3) ||
          (!isWeb && MobileUploadedImageUrl.length + files.length > 3)) {
        alert("Only 3 images are allowed to upload.Re-Upload the images");
        return; // Exit the function
      }
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
        uploadedImageUrls.push(imageUrl); // Push the uploaded image URL to the array
      }
      if (isWeb) {
        setWebUploadedImageUrl([...WebUploadedImageUrl, ...uploadedImageUrls]);
      } else {
        setMobileUploadedImageUrl([...MobileUploadedImageUrl, ...uploadedImageUrls]);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  

  const handleRemoveImage = (index, isWeb) => {
    if (isWeb) {
      const updatedWebImages = [...WebUploadedImageUrl];
      updatedWebImages.splice(index, 1);
      setWebUploadedImageUrl(updatedWebImages);
    } else {
      const updatedMobileImages = [...MobileUploadedImageUrl];
      updatedMobileImages.splice(index, 1);
      setMobileUploadedImageUrl(updatedMobileImages);
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
        <option value="both">Both</option>
      </select>
      <br />
      {isMobileApp && (
        <>
          <div className="textInputQuestions">
            <label htmlFor="mobileScreenshots">
              Please upload 3 Mobile App UI screenshots here -
            </label>
            <input
              type="file"
              id="mobileScreenshots"
              name="mobileScreenshots"
              multiple
              onChange={(e) => handleFileChange(e, false)}
              accept="image/*"
            />
          </div>
          <br />
          {/* Display the uploaded mobile image URLs */}
          {MobileUploadedImageUrl.map((url, index) => (
            <div className="uploadedimages" key={index}>
              <p>
                {`${index + 1}. `}
                {url}
                <button onClick={() => handleRemoveImage(index, false)}>Remove</button>
              </p>
            </div>
          ))}
          <br />
        </>
      )}
      {isWebApp && (
        <div className="textInputQuestions">
          <label htmlFor="webScreenshots">
            Please upload 3 Web App UI screenshots here -
          </label>
          <input
            type="file"
            id="webScreenshots"
            name="webScreenshots"
            multiple
            onChange={(e) => handleFileChange(e, true)}
            accept="image/*"
          />
        </div>
      )}
      <br />
      {/* Display the uploaded web image URLs */}
      {WebUploadedImageUrl.map((url, index) => (
        <div className="uploadedimages" key={index}>
          <p>
            {`${index + 1}. `}
            {url}
            <button onClick={() => handleRemoveImage(index, true)}>Remove</button>
          </p>
        </div>
      ))}
      <br />
    </>
  );
};

export default ProductScreen;