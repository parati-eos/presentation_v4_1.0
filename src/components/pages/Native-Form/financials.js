import React, { useState, useContext } from "react";

const FinancialDataContext = React.createContext();

const useFinancialData = () => {
  return useContext(FinancialDataContext);
};

const FinancialDataProvider = ({ children }) => {
  const [FinancialsData, setFinancialsData] = useState({
    financialSnapshot: "",
    plannedRaise: "",
    revenueCost: [{ year: "", revenue: "", cost: "" }],
    useOfFunds: [
      { use: "Product and Development", percentage: "" },
      { use: "Marketing and Sales", percentage: "" },
      { use: "Business Operation", percentage: "" },
      { use: "Capex", percentage: "" },
      { use: "Team Salaries", percentage: "" },
    ],
  });

  return (
    <FinancialDataContext.Provider
      value={{ FinancialsData, setFinancialsData }}
    >
      {children}
    </FinancialDataContext.Provider>
  );
};

const Financials = ({ formData }) => {
  const { FinancialsData, setFinancialsData } = useFinancialData();
  formData["financialSnapshot"] = FinancialsData["financialSnapshot"];
  formData["plannedRaise"] = FinancialsData["plannedRaise"];
  formData["revenueCost"] = FinancialsData["revenueCost"];
  formData["useOfFunds"] = FinancialsData["useOfFunds"];

  const handleRevenueCostChange = (index, field, value) => {
    const updatedRevenueCost = [...FinancialsData.revenueCost];
    updatedRevenueCost[index][field] = value;

    // Check if the "Revenue Projections" field is filled
    const revenueFilled = updatedRevenueCost[index].revenue !== "";

    // If "Revenue Projections" is filled, "Cost Projections" becomes optional
    if (field === "revenue" && !revenueFilled) {
      // If "Revenue Projections" is empty, reset "Cost Projections" as well
      updatedRevenueCost[index].cost = "";
    }

    updateFinancialData({ ...FinancialsData, revenueCost: updatedRevenueCost });
  };

  const handleUseOfFundsChange = (index, field, value) => {
    const updatedUseOfFunds = [...FinancialsData.useOfFunds];
    updatedUseOfFunds[index][field] = value;
    updateFinancialData({ ...FinancialsData, useOfFunds: updatedUseOfFunds });
  };

  const addRevenueRow = () => {
    if (FinancialsData.revenueCost.length < 11) {
      const newRevenueCost = [
        ...FinancialsData.revenueCost,
        { year: "", revenue: "", cost: "" },
      ];
      updateFinancialData({ ...FinancialsData, revenueCost: newRevenueCost });
    } else {
      alert("You have reached the maximum number of rows.");
    }
  };

  const removeRevenueRow = (index) => {
    if (FinancialsData.revenueCost.length > 1) {
      const newRevenueCost = [...FinancialsData.revenueCost];
      newRevenueCost.splice(index, 1);
      updateFinancialData({ ...FinancialsData, revenueCost: newRevenueCost });
    }
  };

  const updateFinancialData = (newData) => {
    setFinancialsData(newData);
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
          value={FinancialsData.financialSnapshot}
          onChange={(e) =>
            updateFinancialData({
              ...FinancialsData,
              financialSnapshot: e.target.value,
            })
          }
          required
        ></textarea>
      </div>
      <br />
      <div className="textInputQuestions">
        <label>
          Please provide revenue/revenue projections for the following years.
          Leave the fields blank for the years where you do not have the
          required information. Please enter the numbers in millions USD.
        </label>
        <table className="table-contents">
          <thead>
            <tr>
              <th>Years</th>
              <th>Revenue Projections</th>
              <th>Cost Projections</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {FinancialsData.revenueCost.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    name="year"
                    value={row.year}
                    onChange={(e) =>
                      handleRevenueCostChange(index, "year", e.target.value)
                    }
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
                    disabled={!row.revenue} // Disable if Revenue is empty
                  />
                </td>
                <td>
                  {index === FinancialsData.revenueCost.length - 1 ? (
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
      <div className="textInputQuestions">
        <label htmlFor="plannedRaise">
          How much money do you plan to raise? Please enter the number in
          millions USD.*
        </label>
        <input
          type="number"
          id="plannedRaise"
          name="plannedRaise"
          value={FinancialsData.plannedRaise}
          onChange={(e) =>
            updateFinancialData({
              ...FinancialsData,
              plannedRaise: e.target.value,
            })
          }
          required
        />
      </div>
      <br />
      <div className="textInputQuestions">
        <label>Breakdown in percentages for the use of funds:</label>
        <table className="table-contents-useoffunds">
          <thead>
            <tr>
              <th>Use</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {FinancialsData.useOfFunds.map((use, index) => (
              <tr key={index}>
                <td>{use.use}</td>
                <td>
                  <input
                    type="number"
                    name="percentage"
                    value={use.percentage}
                    onChange={(e) =>
                      handleUseOfFundsChange(
                        index,
                        "percentage",
                        e.target.value
                      )
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
