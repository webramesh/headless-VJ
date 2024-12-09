'use client';

import { useState } from 'react';

const CommentsSection = ({ comments = [] }) => {
  const [showMoreComments, setShowMoreComments] = useState(false);
  const validComments = Array.isArray(comments)
    ? comments.filter((comment) => comment && typeof comment === 'object')
    : [];
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  };
  const getCommenterName = (comment) => {
    return comment.author?.node?.name || comment.author?.name || 'Anonymous';
  };

  const getCommentContent = (comment) => {
    const rawContent = comment.content || comment.commentContent || '';
    return stripHtmlTags(rawContent).trim();
  };
  const firstTwoComments = validComments.slice(0, 2);
  const remainingComments = validComments.slice(2);

  if (validComments.length === 0) {
    return (
      <div className="container mx-auto px-4 my-8 lg:px-0">
        <h3 className="font-semibold text-xl mb-2 text-center"> Kommentarer</h3>
        <p className="text-center text-gray-500">Inga kommentarer ännu.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 my-8 flex flex-col gap-4 lg:px-0">
      <h3 className="font-semibold text-xl mb-2 text-center">Alla kommentarer</h3>

      {/* Render the first two comments */}
      <div className="space-y-2 pl-3">
        {firstTwoComments.map((comment) => (
          <div key={comment.id || comment.databaseId} className="flex items-center space-x-2 text-sm md:text-md overflow-hidden">
            <span className="font-semibold whitespace-nowrap">{getCommenterName(comment)}:</span>
            <p className="truncate">{getCommentContent(comment)}</p>
          </div>
        ))}
      </div>

      {/* Toggle visibility for remaining comments */}
      {remainingComments.length > 0 && (
        <div className="pl-3">
          <span
            className="text-red-600 cursor-pointer hover:underline text-sm md:text-md"
            onClick={() => setShowMoreComments(!showMoreComments)}
          >
            {showMoreComments ? 'Visa mindre' : `Visa ${remainingComments.length} fler kommentarer`}
          </span>

          {/* Render the remaining comments if toggled */}
          {showMoreComments && (
            <div className="space-y-2 mt-2">
              {remainingComments.map((comment) => (
                <div
                  key={comment.id || comment.databaseId}
                  className="flex items-center space-x-2 text-sm md:text-md overflow-hidden"
                >
                  <span className="font-semibold whitespace-nowrap">{getCommenterName(comment)}:</span>
                  <p className="truncate">{getCommentContent(comment)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
