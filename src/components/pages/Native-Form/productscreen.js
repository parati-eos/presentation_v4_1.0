import React, { useState, useEffect } from "react";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function to upload files to S3

const ProductScreen = ({ formData, handleChange, uploadedImages }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option
  const [isMobileApp, setIsMobileApp] = useState(null);
  const [isWebApp, setIsWebApp] = useState(null);
  const [webUploadedImageUrls, setWebUploadedImageUrls] = useState([]);
  const [mobileUploadedImageUrls, setMobileUploadedImageUrls] = useState([]);

  useEffect(() => {
    // Populate state with previously uploaded images when component mounts
    if (uploadedImages) {
      setWebUploadedImageUrls(uploadedImages.web || []);
      setMobileUploadedImageUrls(uploadedImages.mobile || []);
    }
  }, [uploadedImages]);

  const handleAppTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsMobileApp(selectedValue === "mobile" || selectedValue === "both");
    setIsWebApp(selectedValue === "web" || selectedValue === "both");
  };

  const handleFileChange = async (files, type) => {
    try {
      const uploadedImageUrls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await uploadFileToS3(file);
        uploadedImageUrls.push(imageUrl);
      }
      if (type === "web") {
        setWebUploadedImageUrls((prevUrls) => [...prevUrls, ...uploadedImageUrls]);
      } else if (type === "mobile") {
        setMobileUploadedImageUrls((prevUrls) => [...prevUrls, ...uploadedImageUrls]);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleRemoveImage = (index, type) => {
    if (type === "web") {
      setWebUploadedImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    } else if (type === "mobile") {
      setMobileUploadedImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
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
        value={selectedOption}
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
              onChange={(e) => handleFileChange(e.target.files, "mobile")}
              accept="image/*"
            />
          </div>
          <br />
          {/* Display the uploaded mobile image URLs */}
          {mobileUploadedImageUrls.map((url, index) => (
            <div className="uploadedimages" key={index}>
              <p>
                {`${index + 1}. `}
                {url}
                <button onClick={() => handleRemoveImage(index, "mobile")}>
                  Remove
                </button>
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
            onChange={(e) => handleFileChange(e.target.files, "web")}
            accept="image/*"
          />
        </div>
      )}
      <br />
      {/* Display the uploaded web image URLs */}
      {webUploadedImageUrls.map((url, index) => (
        <div className="uploadedimages" key={index}>
          <p>
            {`${index + 1}. `}
            {url}
            <button onClick={() => handleRemoveImage(index, "web")}>
              Remove
            </button>
          </p>
        </div>
      ))}
      <br />
    </>
  );
};

export default ProductScreen;
