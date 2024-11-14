import { getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import TaxonomyPage from '../Components/TaxonomyPage';

import { getPostBySlug, getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import ProductRecommendation from './components/ProductRecommendation';

export default async function PostDetails({ params }) {
  const { category, slug } = params;

  const allCategories = await getAllCategories();
  const categories = allCategories.map((category) => category.slug);

  if (categories.includes(category)) {
    const post = await getPostBySlug(slug);
    const postProductRecommendation = await getPostProductRecommendationBySlug(
      // 'twist-pa-ceasarsallad-ett-helt-nytt-bubbel'
      slug
    );

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
          categoryName={post?.categories?.nodes[0]?.name}
        />
        <PostDetailsContent content={post?.content} />

        <ProductRecommendation postProductRecommendation={postProductRecommendation} />
      </>
    );
  }

  return <TaxonomyPage params={params} />;
}
