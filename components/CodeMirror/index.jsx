import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "codemirror/lib/codemirror.css";
import { useEditor } from "../../Hooks/EditorProvider";
import chakraUiTheme from "@chakra-ui/theme";

const Codemirror = dynamic(
  () => {
    import("codemirror/mode/javascript/javascript");
    return import("react-codemirror/lib/Codemirror");
  },
  { ssr: false }
);

export function CodeMirror() {
  const [text, setText] = useState(localStorage.getItem("code") || "");
  const { darkMode } = useEditor();
  const startColor = localStorage.getItem("startColor");
  const endColor = localStorage.getItem("endColor");

  useEffect(() => {
    localStorage.setItem("code", text);
  }, [text]);

  return (
    <>
      <style jsx global>
        {`
          .CodeMirror {
            min-width: max-content;
            height: auto;
            font-size: 1.25rem;
          }
          .CodeMirror.cm-s-default {
            background: transparent;
            color: ${darkMode ? "#fefefe" : "initial"};
          }
          .CodeMirror-cursor {
            border-left: 1px solid ${darkMode ? "#fefefe" : "initial"};
          }
          span.cm-comment {
            color: ${chakraUiTheme.colors.gray[600]} !important;
          }
          span.cm-atom {
            color: ${startColor} !important;
            filter: hue-rotate(20deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-number {
            color: ${endColor} !important;
            filter: hue-rotate(20deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }

          span.cm-property,
          span.cm-attribute {
            color: ${startColor} !important;
            filter: hue-rotate(30deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-keyword {
            color: ${startColor} !important;
            filter: hue-rotate(20deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-string {
            color: ${endColor} !important;
            filter: hue-rotate(50deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }

          span.cm-variable {
            color: ${endColor} !important;
            filter: hue-rotate(60deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-variable-2 {
            color: ${endColor} !important;
            filter: hue-rotate(55deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-def {
            color: ${startColor} !important;
            filter: hue-rotate(10deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"}
              saturation(0.75);
          }
          span.cm-bracket {
            color: ${startColor} !important;
            filter: hue-rotate(10deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-tag {
            color: ${startColor} !important;
            filter: hue-rotate(20deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-link {
            color: ${startColor} !important;
            filter: hue-rotate(40deg)
              ${darkMode ? "brightness(1.4)" : "brightness(0.8)"};
          }
          span.cm-error {
            background: ${startColor} !important;
            color: ${chakraUiTheme.colors.red[600]};
          }
        `}
      </style>
      <Codemirror
        value={text}
        options={{
          mode: "javascript",
          lint: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setText(value);
        }}
        onChange={(value) => {
          setText(value);
        }}
      />
    </>
  );
}
