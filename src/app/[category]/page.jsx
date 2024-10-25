import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '@/src/lib/api/postAPI';

// import { getAllCategories, getPostsByCategory } from '../api/api';

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params, searchParams }) {
  const { category } = params;
  const page = parseInt(searchParams.page) || 1;
  const postsPerPage = 10;

  const { posts: allPosts, categoryName } = await getPostsByCategory(category);

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName || `Posts in "${category}"`}</h1>
      {posts.length > 0 ? (
        <>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b pb-6">
                <Link
                  href={`/${category}/${post.slug}`}
                  className="text-xl font-semibold text-blue-600 hover:underline"
                >
                  <h2>{post.title}</h2>
                </Link>
                <p className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                <div className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            {page > 1 && (
              <Link
                href={`/${category}?page=${page - 1}`}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Previous
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/${category}?page=${page + 1}`}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </Link>
            )}
          </div>
          <p className="mt-4 text-center text-gray-600">
            Page {page} of {totalPages}
          </p>
        </>
      ) : (
        <p className="text-lg text-gray-600">No posts found in this category.</p>
      )}
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Category: ${params.category}`,
    description: `Posts in the ${params.category} category`,
  };
}
