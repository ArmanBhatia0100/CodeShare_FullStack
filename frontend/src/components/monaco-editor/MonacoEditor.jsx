import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Editor from "@monaco-editor/react";
import { useThemeStore } from "../../store/themeStore";
import { useCodeStore } from "../../store/codeStore";
import * as monaco from "monaco-editor";

export default function MonacoEditor() {
  const { defaultHTMLCode, setCode } = useCodeStore();
  const { language } = useCodeStore();

  const editorRef = useRef(null);
  const { theme } = useThemeStore();  

  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language.toLowerCase());
      }
    }
  }, [language]);

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
        language={language}
        defaultValue={defaultHTMLCode}
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
