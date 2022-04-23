import React, { createContext, useContext, useState } from "react";

const EditorContext = createContext();

export function useEditor() {
  return useContext(EditorContext);
}

export default function EditorProvider({ children }) {
  const [title, setTitle] = useState("Title");
  const [background, setBackground] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const [fill, setFill] = useState(
    "linear-gradient(to bottom right, #3479df -13.07%, #8922a0 107.96%)"
  );
  const value = {
    title,
    setTitle,
    background,
    setBackground,
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    fill,
    setFill,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}
