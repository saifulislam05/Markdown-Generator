import React from 'react'

const Home = ({ createNewMarkdown }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-fit flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold text-[#6B8EAE]">
          You don't have any Markdown !
        </h1>
        <button
          className="btn btn-primary text-xl font-bold"
          onClick={createNewMarkdown}
        >
          Create one
        </button>
      </div>
    </div>
  );
};

export default Home