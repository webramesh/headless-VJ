'use client';

import RelatedPostItem from './RelatedPostItem';

const RelatedPosts = ({ relatedPosts }) => {
  // Limit posts to a maximum of 6
  const displayedPosts = relatedPosts.slice(0, 6);

  return (
    <div>
      <p className="text-2xl font-bold text-center">Relaterade inlägg</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {displayedPosts.map((post) => (
          <RelatedPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
