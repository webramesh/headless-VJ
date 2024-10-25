import { getAllCategories, getPostsByCategory, getPostBySlug } from '@/src/lib/api/postAPI';
import Navbar from '../../Components/Navbar';
import ProductRecom from '../Components/ProductRecom';
// import ProductRecom from '../Components/ProductRecom';

// export const revalidate = 20;

// export async function generateStaticParams() {
//     const categories = await getAllCategories();
//     const allPosts = await Promise.all(
//         categories.map(async category => {
//             const posts = await getPostsByCategory(category.slug);
//             // Check if posts is an array, if not, return an empty array
//             return Array.isArray(posts)
//                 ? posts.map(post => ({
//                       category: category.slug,
//                       slug: post.slug,
//                   }))
//                 : [];
//         })
//     );

//     return allPosts.flat();
// }

export default async function PostPage({ params }) {
  const { category, slug } = params;
  const post = await getPostBySlug(slug);
  console.log(post, 'post ');

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Category: {category} | Published on: {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      {/* <ProductRecom /> */}
      <ProductRecom />
    </article>
  );
}

// export async function generateMetadata({ params }) {
//     const post = await getPostBySlug(params.slug);

//     if (!post) {
//         return {
//             title: 'Post Not Found',
//         };
//     }

//     return {
//         title: post.title,
//         description: post.excerpt,
//     };
// }
