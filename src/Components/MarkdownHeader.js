import React from 'react'

const MarkdownHeader = ({ newMarkdown }) => {
  return (
    <div className="w-fit mx-auto flex items-baseline gap-3 my-3">
      <span className="text-2xl font-semibold">Markdowns</span>
      <div className="bg-primary w-6 h-6 rounded-full flex justify-center items-center ">
        <button className=" text-xl text-white" onClick={newMarkdown}>+</button>
      </div>
    </div>
  );
};

export default MarkdownHeader