import React from 'react'
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = ({value}) => {
  return (
    <div>
      <div className="w-full p-2 bg-primary text-primary-content">
      <h1 className='text-xl font-semibold '>Live Preview</h1>
      </div>
      <div className='p-2'>

      <Markdown remarkPlugins={[remarkGfm]}>{value}</Markdown>
      </div>
      
    </div>
  );
}

export default Preview