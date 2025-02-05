'use client';

import { usePagination } from '@/src/context/PageContext';
import { useEffect, useState } from 'react';
import { getPostsByCategory } from '@/src/lib/api/postAPI';
import Pagination from '../Components/pagination/Pagination';
import CategoryCard from '../Components/CategoryCard';
import CardSkeleton from '../Components/SkeletonLoading/CardSkeleton';

const POSTS_PER_PAGE = 15;

export default function CategoryPage({ category, totalPosts }) {
  const { state, dispatch } = usePagination();
  const { after, before, first, last } = state;
  const [posts, setPosts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET', payload: POSTS_PER_PAGE });
    setIsReset(true);
  }, [dispatch]);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: 'CHANGE_LOADING', payload: true });

      const { posts, pageInfo } = await getPostsByCategory(category, first, last, after, before);
      if (posts && pageInfo) {
        setPosts(posts);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No posts or page info returned from getPostsByCategory');
      }
    };

    if (isReset) fetchPosts();
  }, [after, before, first, isReset, last, dispatch, category]);

  return (
    <div className="space-y-4">
      <div className="mt-10 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[5540px] md:h-auto">
        {state.loading
          ? Array.from({ length: POSTS_PER_PAGE }).map((_, index) => <CardSkeleton key={index} />)
          : posts.map((post) => <CategoryCard key={post.id} post={post} />)}
      </div>

      {/* Pagination */}
      <Pagination pageInfo={pageInfo} pageLimit={POSTS_PER_PAGE} total={totalPosts} />
    </div>
  );
}
