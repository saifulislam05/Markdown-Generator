import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react'

const Preview = ({value}) => {
  return (
    <div>
      <div className="w-full p-2 bg-primary text-primary-content">
        <h1 className="text-xl font-semibold ">Live Preview</h1>
      </div>
      <div className="p-2">
        <MarkdownEditor.Markdown source={value} className="h-[90vh]"/>
      </div>
    </div>
  );
}

export default Preview