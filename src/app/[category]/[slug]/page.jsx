import { getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import TaxonomyPage from '../Components/TaxonomyPage';

export default async function PostDetails({ params }) {
  const { category, slug } = params;

  const allCategories = await getAllCategories();
  const categories = allCategories.map((category) => category.slug);

  if (categories.includes(category)) {
    const post = await getPostBySlug(slug);
    if (!post) {
      return <div className="container mx-auto px-4 py-8">Post not found</div>;
    }

    return (
      <>
        <PostDetailsHero
          title={post?.title}
          featuredImage={post?.featuredImage?.node?.sourceUrl}
          authorImage={post?.author?.node?.customAvatar}
          authorName={post?.author?.node?.name}
          date={post?.date}
          category={post?.categories?.nodes[0]}
        />
        <PostDetailsContent content={post?.content} />
      </>
    );
  }

  return <TaxonomyPage params={params} />;
}
