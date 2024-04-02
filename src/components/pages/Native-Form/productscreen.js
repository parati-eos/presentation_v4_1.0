import React, { useState, useEffect } from "react";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function to upload files to S3


const MAX_IMAGES = 3; // Maximum number of images allowed to upload

const ProductScreen = ({ formData, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(formData.appType || ""); // State to store selected option
  const [uploadedImages, setUploadedImages] = useState({
    web: formData.webScreenshots || [],
    mobile: formData.mobileScreenshots || [],
  }); // State to store uploaded image URLs for web and mobile

  useEffect(() => {
    // Store selected option in form data when someone navigates back
    handleChange({ target: { name: "appType", value: selectedOption } });
  }, [selectedOption, handleChange]);

  const handleAppTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // Update selected option state
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;

    const uploadedImagesCopy = { ...uploadedImages };
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL


        if (selectedOption === "both") {
          if (uploadedImagesCopy["mobile"].length < MAX_IMAGES) {
            uploadedImagesCopy["mobile"].push(imageUrl);
          }

          if (uploadedImagesCopy["web"].length < MAX_IMAGES) {
            uploadedImagesCopy["web"].push(imageUrl);
          }
        } else {
          if (uploadedImagesCopy[selectedOption].length < MAX_IMAGES) {
            uploadedImagesCopy[selectedOption].push(imageUrl);
          }
        }
      }

      // Update the uploaded image URLs in the state
      setUploadedImages(uploadedImagesCopy);
      handleChange({
        target: {
          name: selectedOption === "both" ? "screenshots" : `${selectedOption}Screenshots`,
          value: uploadedImagesCopy[selectedOption],
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  const handleRemoveImage = (type, index) => {
    const uploadedImagesCopy = { ...uploadedImages };
    uploadedImagesCopy[type].splice(index, 1);
    setUploadedImages(uploadedImagesCopy);
    handleChange({
      target: {
        name: selectedOption === "both" ? "screenshots" : `${selectedOption}Screenshots`,
        value: uploadedImagesCopy[selectedOption],
      },
    });
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

      {(selectedOption === "mobile" || selectedOption === "both") && (
        <div className="textInputQuestions">
          <label htmlFor="mobileScreenshots">
            Please upload up to 3 Mobile App UI screenshots here -
          </label>
          <input
            type="file"
            id="mobileScreenshots"
            name="mobileScreenshots"
            multiple
            onChange={handleFileChange}
            accept="image/*"
          />
          {/* Display the uploaded mobile image URLs */}
          {uploadedImages.mobile.map((url, index) => (
            <div className="uploadedimages" key={index}>
              <ul>
                <li>{url}</li>
                <button onClick={() => handleRemoveImage("mobile", index)}>Remove</button>
              </ul>
            </div>
          ))}
          <br />
        </div>
      )}
      {(selectedOption === "web" || selectedOption === "both") && (
        <div className="textInputQuestions">
          <label htmlFor="webScreenshots">
            Please upload up to 3 Web App UI screenshots here -

          </label>
          <input
            type="file"
            id="webScreenshots"
            name="webScreenshots"
            multiple

            onChange={handleFileChange}
            accept="image/*"
          />
          {/* Display the uploaded web image URLs */}
          {uploadedImages.web.map((url, index) => (
            <div className="uploadedimages" key={index}>
              <ul>
                <li>{url}</li>
                <button onClick={() => handleRemoveImage("web", index)}>Remove</button>
              </ul>
            </div>
          ))}
          <br />
        </div>
      )}

    </>
  );
};

export default ProductScreen;
