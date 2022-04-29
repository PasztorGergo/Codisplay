import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const EditorContext = createContext();

export function useEditor() {
  return useContext(EditorContext);
}

export default function EditorProvider({ children }) {
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("Title");
  const [background, setBackground] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("javascript");
  const [fill, setFill] = useState("");
  const [padding, setPadding] = useState("8");

  useEffect(() => {
    setFill(
      `linear-gradient(to bottom right, ${
        localStorage.getItem("startColor") || "#3479df"
      } -13.07%, ${localStorage.getItem("endColor") || "#8922a0"} 107.96%)`
    );
    setText(localStorage.getItem("code") || "");
    setDarkMode(localStorage.getItem("darkMode") || true);
    console.log(darkMode);
    setLoading(false);
  }, []);

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
    padding,
    setPadding,
    text,
    setText,
  };

  return (
    <EditorContext.Provider value={value}>
      {!isLoading && children}
    </EditorContext.Provider>
  );
}
