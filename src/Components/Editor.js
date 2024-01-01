import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Editor = ({ value, setValue, updateMarkdownContent }) => {
  const handleEditorChange = (newValue) => {
    setValue(newValue);
    updateMarkdownContent(newValue);
  };

  return (
    <div className="">
      <SimpleMDE value={value} onChange={handleEditorChange} />
    </div>
  );
};

export default Editor;
