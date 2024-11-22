import { addComment, getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import TaxonomyPage from '../Components/TaxonomyPage';
import { getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import ProductRecommendation from './components/ProductRecommendation';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import PostAccordion from '../../Components/PostAccordion';
import CommentForm from '../../Components/CommentForm';

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
        <div className="bg-slate-50 min-h-full">
          <PostDetailsHero
            title={post?.title}
            featuredImage={post?.featuredImage?.node?.sourceUrl}
            authorImage={post?.author?.node?.customAvatar}
            authorName={post?.author?.node?.name}
            date={post?.date}
            categoryName={post?.categories?.nodes[0]?.name}
            categories={post?.categories?.nodes[0]}
          />
          <PostDetailsContent content={post?.content} />

          <div className="container mx-auto mt-14">
            <CommentForm post={post} />
          </div>
          <ProductRecommendation postProductRecommendation={postProductRecommendation} />

          <div className="container mx-auto py-8 px-4">
            <div className=" block md:grid grid-cols-4">
              <div className="col-span-3">
                <SubscriptionForm />
              </div>
              <div>
                <SubscriptionBox />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <PostAccordion />
          </div>
        </div>
      </>
    );
  }

  return <TaxonomyPage params={params} />;
}
