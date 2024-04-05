import React, { useState } from "react";

const Financials = ({ formData, handleChange }) => {
  const [revenueRows, setRevenueRows] = useState([
    { year: "", revenue: "", cost: "" },
  ]);

  const [useOfFunds, setUseOfFunds] = useState([{ use: "", percentage: "" }]);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 10 },
    (_, index) => currentYear - 5 + index
  );

  const handleRevenueInputChange = (e, index) => {
    const { name, value } = e.target;
    const newRows = [...revenueRows];
    newRows[index][name] = value;
    setRevenueRows(newRows);
  };

  const handleUseOfFundsChange = (e, index) => {
    const { name, value } = e.target;
    const newUses = [...useOfFunds];
    newUses[index][name] = value;
    setUseOfFunds(newUses);
  };

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
  const handleuseOfFundsChange = (index, field, value) => {
    const updateduseOfFunds = [...useOfFunds];
    updateduseOfFunds[index][field] = value;
    setUseOfFunds(updateduseOfFunds);
    handleChange({
      target: {
        name: "useOfFunds",
        value: updateduseOfFunds,
      },
    });
  };

  const addRevenueRow = () => {
    if (revenueRows.length < 11) {
      setRevenueRows([...revenueRows, { year: "", revenue: "", cost: "" }]);
    }
  };
  const addUseOfFundsRow = () => {
    if (useOfFunds.length < 5) {
      setUseOfFunds([...useOfFunds, { use: "", percentage: "" }]);
    }
  };

  const removeRevenueRow = (index) => {
    if (revenueRows.length > 1) {
      const newRows = [...revenueRows];
      newRows.splice(index, 1);
      setRevenueRows(newRows);
    }
  };

  const removeUseOfFundsRow = (index) => {
    if (useOfFunds.length > 1) {
      const newUses = [...useOfFunds];
      newUses.splice(index, 1);
      setUseOfFunds(newUses);
    }
  };

  return (
    <div className="form-section">
      <div className="textInputQuestions">
        <label htmlFor="financialSnapshot">
          Please provide a financial snapshot of the company.*
        </label>
        <textarea
          id="financialSnapshot"
          name="financialSnapshot"
          value={formData.financialSnapshot}
          onChange={handleChange}
          rows="4"
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
          value={formData.plannedRaise}
          onChange={handleChange}
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
                <td>
                  <select
                    name="use"
                    value={use.use}
                    onChange={(e) =>
                      handleuseOfFundsChange(index, "use", e.target.value)
                    }
                    required
                  >
                    <option value="">Select a Use</option>
                    <option value="Product and Development">
                      Product and Development
                    </option>
                    <option value="Marketing and Sales">
                      Marketing and Sales
                    </option>
                    <option value="Capex">Capex</option>
                    <option value="Business Operation">
                      Business Operation
                    </option>
                    <option value="Team Salaries">Team Salaries</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="percentage"
                    value={use.percentage}
                    onChange={(e) =>
                      handleuseOfFundsChange(
                        index,
                        "percentage",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  {index === useOfFunds.length - 1 ? (
                    <button onClick={addUseOfFundsRow}>Add Row</button>
                  ) : (
                    <button onClick={() => removeUseOfFundsRow(index)}>
                      Remove
                    </button>
                  )}
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