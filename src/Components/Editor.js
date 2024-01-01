import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./editor.css"
const Editor = ({value,setValue}) => {
  return (
    <div className="">
      <SimpleMDE value={value} onChange={(value) => setValue(value)} />
    </div>
  );
}

export default Editor