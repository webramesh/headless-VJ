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

export const extractFields = (products) => {
  // Use a Set for efficient removal of duplicates
  const containerTypes = new Set();
  const sortiments = new Set();

  // Iterate through products, adding unique containerTypes to the Set
  products.forEach(({ fieldsProduct: { wineSortiment, containerType } }) => {
    if (containerType !== null) {
      containerTypes.add(containerType);
    }

    if (wineSortiment && wineSortiment.length > 0) {
      wineSortiment.forEach((item) => {
        if (item !== null) {
          sortiments.add(item);
        }
      });
    }
  });

  // Convert the Sets back to arrays
  return {
    containerTypes: Array.from(containerTypes),
    sortiments: Array.from(sortiments),
  };
};
