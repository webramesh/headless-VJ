import { Suspense } from 'react';

const Content = ({ description, fallbackText }) => {
  return description ? (
    <div className="text-gray-700 content" dangerouslySetInnerHTML={{ __html: description }} />
  ) : (
    <p className="text-gray-700">{fallbackText}</p>
  );
};

const PostTypeContent = ({ title, description, fallbackText }) => {
  return (
    <div className="-mb-12 mt-6">
      <h1 className="text-3xl mb-4">{title}</h1>
      <Suspense fallback={<div className="animate-pulse h-24 bg-gray-100 rounded" />}>
        <Content description={description} fallbackText={fallbackText} />
      </Suspense>
    </div>
  );
};

export default PostTypeContent;
