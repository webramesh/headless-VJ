'use client';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT_MUTATION } from '@/src/lib/mutations/addComment';
import { validateCommentForm } from '@/src/utils/utils';

const CommentBox = ({ post }) => {
  const postId = atob(post.id).split(':')[1]; // Decode postId
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [addComment, { loading }] = useMutation(ADD_COMMENT_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    // Validate the form
    const errors = validateCommentForm({ authorName, authorEmail, content });
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({}); // Clear errors if valid

    try {
      const { data } = await addComment({
        variables: {
          input: {
            commentOn: parseInt(postId, 10), // Convert postId to integer
            content,
            author: authorName,
            authorEmail,
          },
        },
      });

      if (data) {
        setMessage('Comment added successfully!');
        setAuthorName('');
        setAuthorEmail('');
        setContent('');
      }
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment. Please try again.');
    } finally {
      setTimeout(() => {
        setMessage(null);
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className=" shadow rounded-sm p-6 w-full  mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Comment</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="John"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              disabled={loading}
            />
            {fieldErrors.authorName && <p className="text-red-500 text-xs mt-1">{fieldErrors.authorName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              disabled={loading}
            />
            {fieldErrors.authorEmail && <p className="text-red-500 text-xs mt-1">{fieldErrors.authorEmail}</p>}
          </div>
        </div>

        {/* Comment Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment here..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            rows="4"
            disabled={loading}
          ></textarea>
          {fieldErrors.content && <p className="text-red-500 text-xs mt-1">{fieldErrors.content}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
