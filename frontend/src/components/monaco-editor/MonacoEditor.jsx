import React, { useRef } from "react";
import PropTypes from "prop-types";
import Editor from "@monaco-editor/react";
import { useThemeStore } from "../../store/themeStore";

export default function MonacoEditor({setCode, value}) {
  const editorRef = useRef(null);
  const { theme } = useThemeStore();  

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function handleEditorChange(value) {
    setCode(value);
  }

  return (
    <>
      <Editor
        height="90vh"
        defaultLanguage="html"
        defaultValue={value}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme={theme}
        options={{
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "monospace",
          fontLigatures: false,
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: false,
          folding: false,
          
        }}
      />
    </>
  );
}

MonacoEditor.propTypes = {
  setCode: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
