import React from 'react';
const PostDetailsContent = ({ content }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
          <div className="shadow-2xl p-4 lg:p-16">
            <div className="content">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsContent;
