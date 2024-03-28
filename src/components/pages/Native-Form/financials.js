import React from "react";

const Financials = ({ formData, handleChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value === "" ? undefined : value } });
  };

  return (
    <div className="form-section">
      <>
        <label htmlFor="financialSnapshot">
          Please provide a financial snapshot of the company.*
        </label>
        <textarea
          id="financialSnapshot"
          name="financialSnapshot"
          value={formData.financialSnapshot}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>
      </>
      <br />
      <br />
      <>
        <label>
          Please provide revenue/ revenue projections for the following years.
          Leave the fields blank for the years where you do not have the
          required information. Please enter the numbers in million (USD).
        </label>
        <br />
        <table>
          <thead>
            <tr>
              <th>Years</th>
              <th>Revenue Projections</th>
              <th>Cost Projections</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14)].map((_, index) => (
              <tr key={index}>
                <td>{2015 + index}</td>
                <td>
                  <input
                    type="number"
                    name={`revenueProjections${2020 + index}`}
                    value={formData[`revenueProjections${2020 + index}`]}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name={`costProjections${2020 + index}`}
                    value={formData[`costProjections${2020 + index}`]}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      <br />
      <>
        <label>
          Please provide cost/ cost projections for the following years. Leave
          the fields blank for the years where you do not have the required
          information. Please enter the numbers in million (USD).
        </label>
        <table>
          <thead>
            <tr>
              <th>Years</th>
              <th>Cost Projections</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14)].map((_, index) => (
              <tr key={index}>
                <td>{2015 + index}</td>
                <td>
                  <input
                    type="number"
                    name={`costProjections${2020 + index}`}
                    value={formData[`costProjections${2020 + index}`]}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      <br />
      <>
        <label htmlFor="plannedRaise">
          How much money do you plan to raise? Please enter the numbers in
          million (USD).*
        </label>
        <input
          type="number"
          id="plannedRaise"
          name="plannedRaise"
          value={formData.plannedRaise}
          onChange={handleInputChange}
          required
        />
      </>
      <br />
      <br />
      <>
        <label htmlFor="useOfFunds">
          Do you know the breakdown in percentages for the use of funds?
        </label>
        <select
          id="useOfFunds"
          name="useOfFunds"
          value={formData.useOfFunds}
          onChange={handleInputChange}
          required
        >
          <option value="">Select an Option</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Expansion">Expansion</option>
          <option value="Operations">Operations</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          placeholder="Percentage"
          required
        />
      </>
    </div>
  );
};

export default Financials;
