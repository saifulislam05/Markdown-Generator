import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Editor = ({ value, setValue, updateMarkdownContent }) => {
  const handleEditorChange = (newValue) => {
    setValue(newValue);
    updateMarkdownContent(newValue);
  };

  const customStyle = {
    ".CodeMirror-scroll": {
      minHeight: "90vh",
    },
  };

  return (
    <div style={customStyle}>
      <SimpleMDE value={value} onChange={handleEditorChange} />
    </div>
  );
};

export default Editor;
