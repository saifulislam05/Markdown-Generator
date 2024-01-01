import React from "react";

const MarkdownItem = ({
  data,
  setCurrentMarkdownId,
  findCurrentMarkdown,
  deleteMarkdown,
}) => {
  console.log("markdownItem");
  return (
    <li
      className="w-full flex justify-between items-center px-3 py-2 bg-primary text-primary-content text-base cursor-pointer hover:scale-95 duration-300 font-semibold"
      onClick={() => {
        setCurrentMarkdownId(data.id);
        findCurrentMarkdown();
      }}
    >
      <span>{data.content.split("\n")[0]}</span>
      <i className="fa fa-trash" onClick={() => deleteMarkdown(data.id)}></i>
    </li>
  );
};

export default MarkdownItem;
