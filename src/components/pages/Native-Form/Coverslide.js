import React from "react";

const CoverSlide = ({ formData, handleChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  return (
    <>
      <label htmlFor="establishmentYear">
        In what year was your company established?*
      </label>
      <select
        id="establishmentYear"
        name="establishmentYear"
        value={formData.establishmentYear}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="companyOverview">
        Could you provide a comprehensive overview of your company?*
      </label>
      <textarea
        style={{ height: "250px" }}
        id="companyOverview"
        name="companyOverview"
        value={formData.companyOverview}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default CoverSlide;
