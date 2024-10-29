import React from 'react';

const PostTypeContent = ({ title, description, fallbackText }) => {
  return (
    <div className="-mb-12 mt-6">
      <h1 className="text-3xl font-semi-bold mb-4">{title}</h1>
      {description ? (
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <p className="text-gray-700">{fallbackText}</p>
      )}
    </div>
  );
};

export default PostTypeContent;
