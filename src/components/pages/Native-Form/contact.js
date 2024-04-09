import React from "react";

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
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Enter contact phone number"
        />
      </div>
      <br />
    </>
  );
};

export default Contact;
