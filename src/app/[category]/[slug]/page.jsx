import { getPostBySlug, getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import ProductRecom from '../Components/ProductRecom';
import ProductRecommendation from './components/ProductRecommendation';

export default async function PostDetails({ params }) {
  const { category, slug } = params;
  const post = await getPostBySlug(slug);
  const postProductRecommendation = await getPostProductRecommendationBySlug(
    // 'twist-pa-ceasarsallad-ett-helt-nytt-bubbel'
    slug
    // 'district-7-chardonnay-2022/'
  );
  console.log(postProductRecommendation, '------------------- postProductRecommendation');
  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="">
      <PostDetailsHero
        title={post?.title}
        featuredImage={post?.featuredImage?.node?.sourceUrl}
        authorImage={post?.author?.node?.customAvatar}
        authorName={post?.author?.node?.name}
        date={post?.date}
        categoryName={post?.categories?.nodes[0]?.name}
      />
      <PostDetailsContent content={post?.content} />
      {/* <ProductRecom /> */}
      <ProductRecommendation postProductRecommendation={postProductRecommendation} />
    </div>
  );
}
