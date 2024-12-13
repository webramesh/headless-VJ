'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { usePagination } from '@/src/context/PageContext';
import { getAllArticles } from '../../../lib/api/articleApi';
import Pagination from '../../Components/pagination/Pagination';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import PostAccordion from '../../Components/PostAccordion';

const POSTS_PER_PAGE = 15;

const Card = ({ title, excerpt, date, author, category, imageUrl, slug, categoryColor }) => {
  return (
    <Link href={`/${category.slug || 'uncategorized'}/${slug}`}>
      <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow h-full">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={imageUrl || '/api/placeholder/400/300'}
            alt={title || 'Article image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4 bg-[#f5f5f5] flex-grow flex flex-col">
          <h3 className="font-outfit font-medium text-black text-lg">{title || 'Untitled Article'}</h3>
          <p className="mt-2 font-outfit text-gray-900 text-xs">
            {date ? format(new Date(date), 'dd MMMM, yyyy') : 'No date'}
          </p>
          <p className="text-[#694848] text-xs font-outfit mt-2">{author || 'Unknown Author'}</p>
          <div
            className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed line-clamp-3 flex-grow"
            dangerouslySetInnerHTML={{ __html: excerpt || 'No excerpt available' }}
          />
          <div
            className="flex flex-start mt-2 w-fit px-3 py-1 text-white font-outfit text-xs font-thin rounded-full"
            style={{
              backgroundColor: categoryColor || '#000000',
              color: '#ffffff',
            }}
          >
            {category.name || 'Uncategorized'}
          </div>
        </div>
      </div>
    </Link>
  );
};

const ArticleContent = ({ totalPosts, sidebar }) => {
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

      const { posts, pageInfo } = await getAllArticles(first, last, after, before);
      if (posts && pageInfo) {
        setPosts(posts);
        setPageInfo(pageInfo);
        dispatch({ type: 'CHANGE_LOADING', payload: false });
      } else {
        console.warn('No posts or page info returned from getAllArticles');
      }
    };

    if (isReset) fetchPosts();
  }, [after, before, first, isReset, last, dispatch]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-[75%] mt-4 space-y-6">
          <BreadCrumb title1="Artiklar Om Vin" />
          <div className="text-3xl sm:text-4xl mb-8">
            <h1>Artiklar om vin</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <Card
                  key={post.id || Math.random().toString()}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author?.node?.name || 'Unknown Author'}
                  category={post.categories?.nodes?.[0] || 'Uncategorized'}
                  imageUrl={post.featuredImage?.node?.mediaItemUrl || '/api/placeholder/400/300'}
                  slug={post.slug || '#'}
                  categoryColor={
                    post.categories?.nodes?.[0]?.categoriesImagesAndOtherFields?.categorycolorpicker || '#000000'
                  }
                />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
          <Pagination pageInfo={pageInfo} pageLimit={POSTS_PER_PAGE} total={totalPosts} />
          <SubscriptionForm />
          <PostAccordion />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-10">
          <div className="lg:sticky lg:top-8 space-y-8">{sidebar}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
