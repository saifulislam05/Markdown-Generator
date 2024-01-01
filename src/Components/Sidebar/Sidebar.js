import React from "react";
import MarkdownList from "./MarkdownList";

const Sidebar = () => {
  return (
    <div className=" flex flex-col text-wrap px-2">
      <div className="w-fit mx-auto flex items-baseline gap-3 my-3">
        <span className="text-2xl font-semibold">Markdowns</span>
        <div className="bg-primary w-6 h-6 rounded-full flex justify-center items-center ">
          <button className=" text-xl text-white">+</button>
        </div>
      </div>
      <hr className="my-2"/>
      <MarkdownList/>
    </div>
  );
};

export default Sidebar;
