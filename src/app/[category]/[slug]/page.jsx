import { getPostBySlug, getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import ProductRecommendation from './components/ProductRecommendation';

export default async function PostDetails({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  const postProductRecommendation = await getPostProductRecommendationBySlug(
    // 'twist-pa-ceasarsallad-ett-helt-nytt-bubbel'
    slug
  );

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="">
      {/* <PostDetailsHero
        title={post?.title}
        featuredImage={post?.featuredImage?.node?.sourceUrl}
        authorImage={post?.author?.node?.customAvatar}
        authorName={post?.author?.node?.name}
        date={post?.date}
        categoryName={post?.categories?.nodes[0]?.name}
      /> */}
      {/* <PostDetailsContent content={post?.content} /> */}

      <ProductRecommendation
        postProductRecommendation={postProductRecommendation}
        // smakar={smakar}
        // aromer={aromer}
        // fargers={fargers}
        // matkombinationer={matkombinationer}
        // recommendedProduct={recommendedProduct}
        // product={product}
      />
    </div>
  );
}
