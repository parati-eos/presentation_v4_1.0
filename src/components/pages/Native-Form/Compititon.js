import React, { useState } from 'react';

const Competition = ({ formData, setFormData }) => {
  const [competitors, setCompetitors] = useState(formData.competitors || ['']);

  const handleChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    setCompetitors(updatedCompetitors);
    setFormData(prevState => ({
      ...prevState,
      competitors: updatedCompetitors
    }));
  };

  const handleAddRow = () => {
    if (competitors.length < 6) {
      setCompetitors(prevCompetitors => [...prevCompetitors, '']);
    }
  };

  return (
    <div>
      <h2>Competition</h2>
      {competitors.map((competitor, index) => (
        <div key={index}>
          <label>
            Competitor {index + 1}:
            <input 
              type="text" 
              value={competitor} 
              onChange={(e) => handleChange(index, e.target.value)} 
            />
          </label>
        </div>
      ))}
      {competitors.length < 6 && (
        <button type="button" onClick={handleAddRow}>Add Row</button>
      )}
    </div>
  );
};

export default Competition;
