export const formatEmbeddedContent = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, ''); // Strip HTML tags
  const words = strippedHtml.split(/\s+/); // Split by spaces
  return words.slice(0, 20).join(' ') + '...'; // Join the first 50 words
};
