import React from "react";
import Split from "react-split";

import Editor from "./Editor";
import Preview from "./Preview";
import Sidebar from "./Sidebar/Sidebar";

const MarkdownPage = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <Split sizes={[16, 42,42]} direction="horizontal" className="flex h-full ">
      <Sidebar />
      <Editor value={value} setValue={setValue} />
      <Preview value={value}/>
    </Split>
  );
};

export default MarkdownPage;
