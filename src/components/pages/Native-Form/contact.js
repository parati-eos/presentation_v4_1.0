import React from 'react';

const Contact = ({ formData, handleChange }) => {
  return (
    <div className="form-section">
      <h2>Contact Information</h2>
      <div className="form-group">
        <label htmlFor="websiteLink">Website Link</label>
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

      <div className="form-group">
        <label htmlFor="linkedinLink">LinkedIn Page Link</label>
        <input
          type="text"
          id="linkedinLink"
          name="linkedinLink"
          value={formData.linkedinLink}
          onChange={handleChange}
          placeholder="Enter your LinkedIn page link"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactEmail">Contact Email Address</label>
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

      <div className="form-group">
        <label htmlFor="contactPhone">Contact Phone Number</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Enter contact phone number"
          required
        />
      </div>
    </div>
  );
};

export default Contact;
