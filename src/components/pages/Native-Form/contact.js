import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";// Import the CSS for the PhoneInput component

const Contact = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <label>Please provide the link to your website.*</label>
        <input
          type="text"
          id="websiteLink"
          name="websiteLink"
          value={formData.websiteLink}
          onChange={handleChange}
          placeholder="Enter your website link"
          required
        />
      </div>
      <br />
      <div className="textInputQuestions">
        <label>Please provide the link to your company Linkedin page.</label>
        <input
          type="text"
          id="linkedinLink"
          name="linkedinLink"
          value={formData.linkedinLink}
          onChange={handleChange}
          placeholder="Enter your LinkedIn page link"
        />
      </div>
      <br />
      <div className="textInputQuestions">
        <label>Please provide the contact email address.*</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="Enter contact email address"
          required
        />
      </div>
      <br />
      <div className="textInputQuestions">
        <label>Please provide the contact phone number.</label>
        {/* Replace the input field with the PhoneInput component */}
        <PhoneInput
          country={"eg"} // Initial country code (you can change it as needed)
          enableSearch={true} // Enable country search
          value={formData.contactPhone} // Set the value
          onChange={(phone) => handleChange({ target: { name: "contactPhone", value: phone } })} // Handle onChange event to update the state
        />
      </div>
      <br />
    </>
  );
};

export default Contact;
