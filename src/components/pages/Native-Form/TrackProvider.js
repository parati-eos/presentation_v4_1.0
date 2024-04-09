import React, { createContext, useContext, useState } from "react";

const TrackDataContext = createContext();

const TrackProvider = ({ children }) => {
  const [phaseRows, setPhaseRows] = useState([
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
    { year1: "", year2: "", TR: "" },
  ]);

  const updatePhaseRows = (updatedRows) => {
    setPhaseRows(updatedRows);
  };

  return (
    <TrackDataContext.Provider value={{ phaseRows, updatePhaseRows }}>
      {children}
    </TrackDataContext.Provider>
  );
};

const useTrackData = () => {
  return useContext(TrackDataContext);
};

export { TrackProvider, useTrackData };
