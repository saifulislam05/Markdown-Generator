import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useMemo } from "react";

const Editor = ({ value, setValue, updateMarkdownContent }) => {
  const handleEditorChange = (newValue) => {
    setValue(newValue);
    updateMarkdownContent(newValue);
  };

  const customStyleOption = useMemo(() => {
    return {minHeight:"90vh"}
  },[])
  return (
    <div>
      <SimpleMDE
        value={value}
        onChange={handleEditorChange}
        options={customStyleOption}
      />
    </div>
  );
};

export default Editor;
