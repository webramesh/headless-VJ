import React from 'react';
import Link from 'next/link';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import CategoryCard from '../../app/Components/CategoryCard';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from './Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import { getPostsByCategory, getAllCategories } from '../../lib/api/postAPI';

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function Online({ params, searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const postsPerPage = 12;

  const { posts: allPosts, categoryName, categoryDescription } = await getPostsByCategory(params.category || 'online');

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Main Content Section (3/4) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <PostTypeContent
            title={categoryName || 'Online'}
            description={categoryDescription}
            fallbackText="Sedan 2007 är det lagligt att importera vin privat via nätet i Sverige. Om du funderar på att ta vara på det utökade utbudet och de ofta billigare priserna guidar vi dig genom processen. Vi förklara steg för steg hur du går till väga och listar annan viktig information."
          />

          <div className="space-y-4">
            <CategoryCard posts={posts} />
            {/* Pagination */}
            <div className="py-6 flex justify-between items-center px-6">
              {page > 1 && (
                <Link
                  href={`/${params.category || 'online'}?page=${page - 1}`}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Previous
                </Link>
              )}
              <p className="text-center text-gray-600">
                Page {page} of {totalPages}
              </p>
              {page < totalPages && (
                <Link
                  href={`/${params.category || 'online'}?page=${page + 1}`}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Next
                </Link>
              )}
            </div>
            <AccordionNew />
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        {/* Sidebar Section (1/4) */}
        <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Category: ${params.category || 'Online'}`,
    description: `Posts in the ${params.category || 'Online'} category`,
  };
}
