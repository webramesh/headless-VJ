export const formatEmbeddedContent = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, ''); // Strip HTML tags
  const words = strippedHtml.split(/\s+/); // Split by spaces
  return words.slice(0, 20).join(' ') + '...'; // Join the first 50 words
};

export const validateCommentForm = ({ authorName, authorEmail, content }) => {
  const errors = {};

  if (!authorName.trim()) {
    errors.authorName = 'Name is required.';
  }

  if (!authorEmail.trim()) {
    errors.authorEmail = 'Email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(authorEmail.trim())) {
    errors.authorEmail = 'Enter a valid email address.';
  }

  if (!content.trim()) {
    errors.content = 'Comment is required.';
  }

  return errors;
};
