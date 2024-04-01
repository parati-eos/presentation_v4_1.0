import React from "react";

const Contact = ({ formData, handleChange }) => {
  return (
    <>
      <div className="textInputQuestions">
        <input
          type="text"
          id="websiteLink"
          name="websiteLink"
          value={formData.websiteLink}
          onChange={handleChange}
          placeholder="Enter your website link"
          required
        />
        <br />
        <br />
        <input
          type="text"
          id="linkedinLink"
          name="linkedinLink"
          value={formData.linkedinLink}
          onChange={handleChange}
          placeholder="Enter your LinkedIn page link"
          required
        />
        <br />
        <br />
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="Enter contact email address"
          required
        />
        <br />
        <br />
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Enter contact phone number"
          required
        />
        <br />
      </div>
    </>
  );
};

export default Contact;
