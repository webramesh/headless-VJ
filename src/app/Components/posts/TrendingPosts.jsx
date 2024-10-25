import React from 'react';
import PostCard from './PostCard';

const TrendingPosts = ({ posts }) => {
  return (
    <div className="container mx-auto mt-10 p-2">
      <div className=" text-center font-extralight text-red-500">Trending</div>
      <div className="text-center  text-xl md:text-2xl font-medium mt-4">
        Artiklar värda att lasa fran vära redaktörer
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {posts?.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post?.title}
              date={post?.date}
              authorName={post?.author?.node?.name}
              excerpt={post?.excerpt}
              slug={post?.slug}
              imageURL={post?.featuredImage?.node?.mediaItemUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingPosts;
