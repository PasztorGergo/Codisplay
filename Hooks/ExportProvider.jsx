import React, { useState, useContext, createContext } from "react";

const ExportContext = createContext();

export function useExport() {
  return useContext(ExportContext);
}

export function ExportProvider({ children }) {
  const [imgRef, setImgRef] = useState();

  return (
    <ExportContext.Provider value={{ imgRef, setImgRef }}>
      {children}
    </ExportContext.Provider>
  );
}
