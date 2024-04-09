import React, { useState, useContext, useEffect } from "react";

// Create context for financial data
const FinancialDataContext = React.createContext();

// Custom hook to use financial data context
const useFinancialData = () => {
  return useContext(FinancialDataContext);
};

// Provider component for financial data
const FinancialDataProvider = ({ children }) => {
  const [revenueRows, setRevenueRows] = useState([
    { year: "", revenue: "", cost: "" },
  ]);

  const [useOfFunds, setUseOfFunds] = useState([
    { use: "Product and Development", percentage: "" },
    { use: "Marketing and Sales", percentage: "" },
    { use: "Business Operation", percentage: "" },
    { use: "Capex", percentage: "" },
    { use: "Team Salaries", percentage: "" }
  ]);

  return (
    <FinancialDataContext.Provider value={{ revenueRows, setRevenueRows, useOfFunds, setUseOfFunds }}>
      {children}
    </FinancialDataContext.Provider>
  );
};

const Financials = ({handleChange}) => {
  const { revenueRows, setRevenueRows, useOfFunds, setUseOfFunds } = useFinancialData();

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 10 },
    (_, index) => currentYear - 5 + index
  );

  const handleRevenueCostChange = (index, field, value) => {
    const updatedRevenueCost = [...revenueRows];
    updatedRevenueCost[index][field] = value;
    setRevenueRows(updatedRevenueCost);
    handleChange({
      target: {
        name: "revenueCost",
        value: updatedRevenueCost,
      },
    });
  };

  const handleUseOfFundsChange = (index, field, value) => {
    const updatedUseOfFunds = [...useOfFunds];
    updatedUseOfFunds[index][field] = value;
    setUseOfFunds(updatedUseOfFunds);
  };

  const addRevenueRow = () => {
    if (revenueRows.length < 11) {
      setRevenueRows([...revenueRows, { year: "", revenue: "", cost: "" }]);
    }
  };

  const removeRevenueRow = (index) => {
    if (revenueRows.length > 1) {
      const newRows = [...revenueRows];
      newRows.splice(index, 1);
      setRevenueRows(newRows);
    }
  };

  // useEffect to initialize state with context data when the component mounts
  useEffect(() => {
    // Check if the context data is already initialized
    if (revenueRows.length === 1 && !revenueRows[0].year) {
      const initialRevenueRows = [
        { year: "", revenue: "", cost: "" },
        ...revenueRows.slice(1)
      ];
      setRevenueRows(initialRevenueRows);

      // Initialize useOfFunds with context data
      setUseOfFunds(useOfFunds);
    }
  }, []);

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
          required
          onChange={handleChange}
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
            {revenueRows.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    name="year"
                    value={row.year}
                    onChange={(e) =>
                      handleRevenueCostChange(index, "year", e.target.value)
                    }
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
                    onChange={(e) =>
                      handleRevenueCostChange(index, "revenue", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="cost"
                    value={row.cost}
                    onChange={(e) =>
                      handleRevenueCostChange(index, "cost", e.target.value)
                    }
                  />
                </td>
                <td>
                  {index === revenueRows.length - 1 ? (
                    <button onClick={addRevenueRow}>Add Row</button>
                  ) : (
                    <button onClick={() => removeRevenueRow(index)}>
                      Remove
                    </button>
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
            {useOfFunds.map((use, index) => (
              <tr key={index}>
                <td>{use.use}</td>
                <td>
                  <input
                    type="number"
                    name="percentage"
                    value={use.percentage}
                    onChange={(e) =>
                      handleUseOfFundsChange(index, "percentage", e.target.value)
                    }
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
