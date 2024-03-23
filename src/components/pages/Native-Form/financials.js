import React from 'react';

const Financials = ({ formData, handleChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange({ target: { name, value: value === '' ? undefined : value } });
  };

  return (
    <div className="form-section">
      <h2>Financial Snapshot</h2>
      <div className="form-group">
        <label htmlFor="financialSnapshot">Financial Snapshot</label>
        <textarea
          id="financialSnapshot"
          name="financialSnapshot"
          value={formData.financialSnapshot}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>
      </div>

      <h2>Revenue and Cost Projections</h2>
      <div className="form-group">
        <label>Revenue Projections (in million USD)</label>
        <table>
          <thead>
            <tr>
              <th>Years</th>
              <th>Revenue Projections</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(14)].map((_, index) => (
              <tr key={index}>
                <td>{2015 + index}</td>
                <td>
                  <input
                    type="number"
                    name={`revenueProjections${2015 + index}`}
                    value={formData[`revenueProjections${2015 + index}`]}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-group">
        <label>Cost Projections (in million USD)</label>
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
                    name={`costProjections${2015 + index}`}
                    value={formData[`costProjections${2015 + index}`]}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Funding</h2>
      <div className="form-group">
        <label htmlFor="plannedRaise">Planned Amount to Raise (in million USD)</label>
        <input
          type="number"
          id="plannedRaise"
          name="plannedRaise"
          value={formData.plannedRaise}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="useOfFunds">Breakdown of Funds Distribution (Percentage)</label>
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
      </div>
    </div>
  );
};

export default Financials;