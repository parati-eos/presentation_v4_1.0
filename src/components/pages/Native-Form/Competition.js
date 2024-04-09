// Competition.js
import React, { useState, createContext, useContext } from "react";
import close from "../../Asset/close.png";

const CompetitionContext = createContext();

const CompetitionProvider = ({ children }) => {
  const minCompetitorFields = 4;
  const initialCompetitors = Array.from({ length: minCompetitorFields }, () => "");

  const [competitors, setCompetitors] = useState(initialCompetitors);

  const updateCompetitors = (updatedCompetitors) => {
    setCompetitors(updatedCompetitors);
  };

  return (
    <CompetitionContext.Provider value={{ competitors, updateCompetitors }}>
      {children}
    </CompetitionContext.Provider>
  );
};

const useCompetitionData = () => {
  return useContext(CompetitionContext);
};

const Competition = ({formData}) => {
  const { competitors, updateCompetitors } = useCompetitionData();
  formData['competitors'] = competitors;
  const handleCompetitorChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    updateCompetitors(updatedCompetitors);
  };

  const addCompetitorRow = () => {
    if (competitors.length < 6) {
      updateCompetitors([...competitors, ""]); // Add an empty competitor
    }
  };

  const removeCompetitorRow = (index) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors.splice(index, 1); // Remove competitor at the specified index
    updateCompetitors(updatedCompetitors);
  };

  return (
    <>
      <div className="textInputQuestions">
        <label htmlFor="competitors">
          Who would you consider to be your company's top competitors in the
          market? List at least 4 of them
        </label>
        {competitors.map((competitor, index) => (
          <div key={index} className="competitor-row">
            <br />
            <br />
            <>
              <div className="competitor">
                <input
                  type="text"
                  placeholder={`Competitor ${index + 1}`}
                  value={competitor}
                  onChange={(e) =>
                    handleCompetitorChange(index, e.target.value)
                  }
                  required
                />
              </div>
              {competitors.length > minCompetitorFields && (
                <div
                  className="close-button-competition"
                  type="button"
                  onClick={() => removeCompetitorRow(index)}
                >
                  <img src={close} alt="Close" />
                </div>
              )}
            </>
          </div>
        ))}
        {competitors.length < 6 && (
          <>
            <button
              type="button"
              onClick={addCompetitorRow}
              className="add-row-button"
            >
              Add Competitor
            </button>
          </>
        )}
      </div>
    </>
  );
};
export { CompetitionProvider, useCompetitionData, Competition };

