import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import Split from "react-split";
import Editor from "./Editor";
import Preview from "./Preview";
import Sidebar from "./Sidebar/Sidebar";

const MarkdownPage = () => {
  const [markdowns, setMarkdowns] = useState(
    () => JSON.parse(localStorage.getItem("markdowns")) || []
  );
  const [currentMarkdownId, setCurrentMarkdownId] = useState(
    (markdowns[0] && markdowns[0].id) || ""
  );
  const [value, setValue] = useState("");

  // Save to local storage whenever markdowns change
  useEffect(() => {
    localStorage.setItem("markdowns", JSON.stringify(markdowns));
  }, [markdowns]);

  // Update editor content when currentMarkdownId or markdowns change
  useEffect(() => {
    const currentMarkdown =
      markdowns.find((markdown) => markdown.id === currentMarkdownId) ||
      markdowns[0];
    currentMarkdown && setValue(currentMarkdown.content);
  }, [currentMarkdownId, markdowns]);

  const createNewMarkdown = () => {
    const newMarkdown = {
      id: Math.random(),
      content: "# Title here",
    };
    setMarkdowns((prevMarkdowns) => [newMarkdown, ...prevMarkdowns]);
    setCurrentMarkdownId(newMarkdown.id);
  };

  const findCurrentMarkdown = () =>
    markdowns.find((markdown) => markdown.id === currentMarkdownId) ||
    markdowns[0];

  const updateMarkdownContent = (newContent) => {
    const updatedMarkdowns = markdowns.map((markdown) =>
      markdown.id === currentMarkdownId
        ? { ...markdown, content: newContent }
        : markdown
    );
    setMarkdowns(updatedMarkdowns);
  };

  const deleteMarkdown = (markdownId) => {
    setMarkdowns((prevMarkdowns) =>
      prevMarkdowns.filter((markdown) => markdown.id !== markdownId)
    );
  };

  return markdowns.length > 0 ? (
    <Split sizes={[16, 42, 42]} direction="horizontal" className="flex h-full">
      <Sidebar
        markdowns={markdowns}
        setCurrentMarkdownId={setCurrentMarkdownId}
        findCurrentMarkdown={findCurrentMarkdown}
        newMarkdown={createNewMarkdown}
        deleteMarkdown={deleteMarkdown}
      />
      <Editor
        value={value}
        setValue={setValue}
        updateMarkdownContent={updateMarkdownContent}
      />
      <Preview value={value} />
    </Split>
  ) : (
      <Home createNewMarkdown={createNewMarkdown} />
  );
};

export default MarkdownPage;
