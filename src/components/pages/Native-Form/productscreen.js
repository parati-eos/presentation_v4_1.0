import React, { useState } from "react";
import uploadFileToS3 from "./uploadFileToS3"; // Import the function to upload files to S3

const ProductScreen = ({ formData, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option
  const [isMobileApp, setIsMobileApp] = useState(null);
  const [isWebApp, setIsWebApp] = useState(null);
  const [WebUploadedImageUrl, setWebUploadedImageUrl] = useState(null); // State to store uploaded image URL
  const [MobileUploadedImageUrl, setMobileUploadedImageUrl] = useState(null); // State to store uploaded image URL

  const handleAppTypeChange = (e) => {
    const selectedValue = e.target.value;
    const uploadedMobileImageUrls = [];
    const uploadedWebImageUrls = [];
    setSelectedOption(selectedValue); // Update selected option state

    // Check if the selected option is "None"
    if (selectedValue === "") {
      setIsMobileApp(null); // Set isMobileApp state to null for "None" option
      setIsWebApp(null);
      setWebUploadedImageUrl(null);
      setMobileUploadedImageUrl(null);
      handleChange({
        target: {
          name: "webScreenshots",
          value: uploadedWebImageUrls,
        },
      });
      handleChange({
        target: {
          name: "mobileScreenshots",
          value: uploadedMobileImageUrls,
        },
      });
    } else if (selectedValue === "mobile") {
      setIsMobileApp(true);
      setIsWebApp(null);
      setWebUploadedImageUrl(null);
      setMobileUploadedImageUrl(null);
      handleChange({
        target: {
          name: "webScreenshots",
          value: uploadedWebImageUrls,
        },
      });
      handleChange({
        target: {
          name: "mobileScreenshots",
          value: uploadedMobileImageUrls,
        },
      });
    } else if (selectedValue === "web") {
      setIsWebApp(true);
      setIsMobileApp(null);
      setWebUploadedImageUrl(null);
      setMobileUploadedImageUrl(null);
      handleChange({
        target: {
          name: "webScreenshots",
          value: uploadedWebImageUrls,
        },
      });
      handleChange({
        target: {
          name: "mobileScreenshots",
          value: uploadedMobileImageUrls,
        },
      });
    } else if (selectedValue === "both") {
      setIsWebApp(true);
      setIsMobileApp(true);
      setWebUploadedImageUrl(null);
      setMobileUploadedImageUrl(null);
      handleChange({
        target: {
          name: "webScreenshots",
          value: uploadedWebImageUrls,
        },
      });
      handleChange({
        target: {
          name: "mobileScreenshots",
          value: uploadedMobileImageUrls,
        },
      });
    }
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const uploadedMobileImageUrls = [];
    const uploadedWebImageUrls = [];
    try {
      for (let i = 0; i < files.length; i++) {
        if (selectedOption === "web") {
          const file = files[i];
          const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
          uploadedWebImageUrls.push(imageUrl); // Push the uploaded image URL to the array
          handleChange({
            target: {
              name: "webScreenshots",
              value: uploadedWebImageUrls,
            },
          });
          setWebUploadedImageUrl(uploadedWebImageUrls);
        } else if (selectedOption === "mobile") {
          const file = files[i];
          const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
          uploadedMobileImageUrls.push(imageUrl); // Push the uploaded image URL to the array
          handleChange({
            target: {
              name: "mobileScreenshots",
              value: uploadedMobileImageUrls,
            },
          });
          setMobileUploadedImageUrl(uploadedMobileImageUrls);
        }
      }
      // Check if the onUpload function is provided as a prop and call it
      if (typeof handleChange === "function") {
        handleChange(uploadedMobileImageUrls);
        handleChange(uploadedWebImageUrls);
      } else {
        console.warn("handleChange function is not provided as a prop.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleBothFileChangeMobile = async (e) => {
    const files = e.target.files;
    const uploadedMobileImageUrls = [];
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
        uploadedMobileImageUrls.push(imageUrl); // Push the uploaded image URL to the array
        handleChange({
          target: {
            name: "mobileScreenshots",
            value: uploadedMobileImageUrls,
          },
        });
        setMobileUploadedImageUrl(uploadedMobileImageUrls);
      }

      // Check if the onUpload function is provided as a prop and call it
      if (typeof handleChange === "function") {
        handleChange(uploadedMobileImageUrls);
      } else {
        console.warn("handleChange function is not provided as a prop.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleBothFileChangeWeb = async (e) => {
    const files = e.target.files;
    const uploadedWebImageUrls = [];
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await uploadFileToS3(file); // Upload the file to S3 and get the URL
        uploadedWebImageUrls.push(imageUrl); // Push the uploaded image URL to the array
        handleChange({
          target: {
            name: "webScreenshots",
            value: uploadedWebImageUrls,
          },
        });
        setWebUploadedImageUrl(uploadedWebImageUrls);
      }

      // Check if the onUpload function is provided as a prop and call it
      if (typeof handleChange === "function") {
        handleChange(uploadedWebImageUrls);
      } else {
        console.warn("handleChange function is not provided as a prop.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
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
              onChange={
                selectedOption === "both"
                  ? handleBothFileChangeMobile
                  : handleFileChange
              }
              accept="image/*"
            />
          </div>
          <br />
          {/* Display the uploaded mobile image URLs */}
          {MobileUploadedImageUrl &&
            MobileUploadedImageUrl.map((url, index) => (
              <div className="uploadedimages" key={index}>
                <ul>
                  <li>{url}</li>
                </ul>
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
            onChange={
              selectedOption === "both"
                ? handleBothFileChangeWeb
                : handleFileChange
            }
            accept="image/*"
          />
        </div>
      )}
      <br />
      {/* Display the uploaded mobile image URLs */}
      {WebUploadedImageUrl &&
        WebUploadedImageUrl.map((url, index) => (
          <div className="uploadedimages" key={index}>
            <ul>
              <li>{url}</li>
            </ul>
          </div>
        ))}
      <br />
    </>
  );
};

export default ProductScreen;
