import React from "react";
import MarkdownHeader from "../MarkdownHeader";
import MarkdownItem from "./MarkdownItem";

const Sidebar = ({
  markdowns,
  setCurrentMarkdownId,
  findCurrentMarkdown,
  newMarkdown,
  deleteMarkdown,
}) => {
  return (
    <div className="flex flex-col text-wrap px-2">
      <MarkdownHeader newMarkdown={newMarkdown} />
      <hr className="my-2" />
      <ul className="w-full list-none flex flex-col gap-2">
        {markdowns.length > 0 &&
          markdowns.map((markdown) => (
            <MarkdownItem
              key={markdown.id}
              data={markdown}
              setCurrentMarkdownId={setCurrentMarkdownId}
              findCurrentMarkdown={findCurrentMarkdown}
              deleteMarkdown={deleteMarkdown}
            />
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
