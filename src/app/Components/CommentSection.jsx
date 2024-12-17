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
        <h3 className="font-semibold text-xl mb-2 text-center">Kommentarer</h3>
        <p className="text-center text-gray-500">Inga kommentarer ännu.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4">
      <h3 className="font-semibold text-xl mb-2 text-center">Alla kommentarer</h3>

      {/* Render the first two comments */}
      <div className="space-y-4">
        {firstTwoComments.map((comment) => (
          <div key={comment.id || comment.databaseId} className="border p-3 bg-white shadow-sm">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-sm bg-gray-100 px-2 py-1 rounded mr-2">
                {getCommenterName(comment)}
              </span>
            </div>
            <p className="text-gray-700 text-sm">{getCommentContent(comment)}</p>
          </div>
        ))}
      </div>

      {/* Toggle visibility for remaining comments */}
      {remainingComments.length > 0 && (
        <div>
          <button
            className="text-red-600 cursor-pointer hover:underline text-sm p-3"
            onClick={() => setShowMoreComments(!showMoreComments)}
          >
            {showMoreComments ? 'Visa mindre' : `Visa ${remainingComments.length} fler kommentarer`}
          </button>

          {/* Render the remaining comments if toggled */}
          {showMoreComments && (
            <div className="space-y-4 mt-4">
              {remainingComments.map((comment) => (
                <div key={comment.id || comment.databaseId} className="border rounded-lg p-3 bg-white shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-sm bg-gray-100 px-2 py-1 rounded-full mr-2">
                      {getCommenterName(comment)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{getCommentContent(comment)}</p>
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
