import React, { useState, useContext } from "react";

// Create context for financial data
const FinancialDataContext = React.createContext();

// Custom hook to use financial data context
const useFinancialData = () => {
  return useContext(FinancialDataContext);
};

// Provider component for financial data
const FinancialDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    financialSnapshot: "",
    plannedRaise: "",
    revenueCost: [{ year: "", revenue: "", cost: "" }],
    useOfFunds: [
      { use: "Product and Development", percentage: "" },
      { use: "Marketing and Sales", percentage: "" },
      { use: "Business Operation", percentage: "" },
      { use: "Capex", percentage: "" },
      { use: "Team Salaries", percentage: "" }
    ]
  });

  return (
    <FinancialDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FinancialDataContext.Provider>
  );
};

const Financials = () => {
  const { formData, setFormData } = useFinancialData();

  const handleRevenueCostChange = (index, field, value) => {
    const updatedRevenueCost = [...formData.revenueCost];
    updatedRevenueCost[index][field] = value;
    updateFormData({ ...formData, revenueCost: updatedRevenueCost });
  };

  const handleUseOfFundsChange = (index, field, value) => {
    const updatedUseOfFunds = [...formData.useOfFunds];
    updatedUseOfFunds[index][field] = value;
    updateFormData({ ...formData, useOfFunds: updatedUseOfFunds });
  };

  const addRevenueRow = () => {
    if (formData.revenueCost.length < 11) {
      const newRevenueCost = [...formData.revenueCost, { year: "", revenue: "", cost: "" }];
      updateFormData({ ...formData, revenueCost: newRevenueCost });
    }
  };

  const removeRevenueRow = (index) => {
    if (formData.revenueCost.length > 1) {
      const newRevenueCost = [...formData.revenueCost];
      newRevenueCost.splice(index, 1);
      updateFormData({ ...formData, revenueCost: newRevenueCost });
    }
  };

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 10 },
    (_, index) => currentYear - 5 + index
  );

  return (
    <div className="form-section">
      <div className="textInputQuestions">
        <label htmlFor="financialSnapshot">
          Please provide a financial snapshot of the company.*
        </label>
        <textarea
          id="financialSnapshot"
          name="financialSnapshot"
          rows="4"
          value={formData.financialSnapshot}
          onChange={(e) => updateFormData({ ...formData, financialSnapshot: e.target.value })}
          required
        ></textarea>
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label>
          Please provide revenue/revenue projections for the following years.
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
            {formData.revenueCost.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    name="year"
                    value={row.year}
                    onChange={(e) => handleRevenueCostChange(index, "year", e.target.value)}
                    required
                  >
                    <option value="">Select a Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="revenue"
                    value={row.revenue}
                    onChange={(e) => handleRevenueCostChange(index, "revenue", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="cost"
                    value={row.cost}
                    onChange={(e) => handleRevenueCostChange(index, "cost", e.target.value)}
                  />
                </td>
                <td>
                  {index === formData.revenueCost.length - 1 ? (
                    <button onClick={addRevenueRow}>Add Row</button>
                  ) : (
                    <button onClick={() => removeRevenueRow(index)}>Remove</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label htmlFor="plannedRaise">
          How much money do you plan to raise? Please enter the numbers in
          million (USD).*
        </label>
        <input
          type="number"
          id="plannedRaise"
          name="plannedRaise"
          value={formData.plannedRaise}
          onChange={(e) => updateFormData({ ...formData, plannedRaise: e.target.value })}
          required
        />
      </div>
      <br />
      <br />
      <div className="textInputQuestions">
        <label>Breakdown in percentages for the use of funds:</label>
        <br />
        <table>
          <thead>
            <tr>
              <th>Use</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {formData.useOfFunds.map((use, index) => (
              <tr key={index}>
                <td>{use.use}</td>
                <td>
                  <input
                    type="number"
                    name="percentage"
                    value={use.percentage}
                    onChange={(e) => handleUseOfFundsChange(index, "percentage", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Financials;
export { FinancialDataProvider, useFinancialData };
