import { getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import TaxonomyPage from '../Components/TaxonomyPage';
import { getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import AccordionNew from '../../Components/AccordionNew';
import ProductRecommendation from './components/ProductRecommendation';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import PostAccordion from '../../Components/PostAccordion';
import CommentForm from '../../Components/CommentForm';
import CommentBox from '../../Components/CommentBox';

export default async function PostDetails({ params }) {
  const { category, slug } = params;

  const allCategories = await getAllCategories();
  const categories = allCategories.map((category) => category.slug);

  if (categories.includes(category)) {
    const post = await getPostBySlug(slug);
    const postProductRecommendation = await getPostProductRecommendationBySlug(slug);

    if (!post) {
      return <div className="container mx-auto px-4 py-8">Post not found</div>;
    }

    // Extract FAQ items from the post data
    const faqItems = post.faq?.faq || [];

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
          <div className="mt-24 ml-56 pl-3 font-medium text-xl">Frågor och Svar</div>
          <div className="mx-56 mt-4">
            <AccordionNew faqItems={faqItems} />
          </div>
          <ProductRecommendation postProductRecommendation={postProductRecommendation} />

          <div className="container mx-auto py-8 px-4 lg:px-0">
            <div className=" block md:grid grid-cols-4">
              <div className="col-span-3">
                <SubscriptionForm />
              </div>
              <div>
                <SubscriptionBox />
              </div>
            </div>
          </div>

          {/* all comments */}
          <div className="container mx-auto px-4 my-8 flex flex-col gap-4 lg:px-0">
            <>
              <h3 className="font-bold text-xl mb-4">All Comments </h3>
              {post?.comments?.nodes?.map((comment) => {
                return <CommentBox key={comment.id} comment={comment} />;
              })}
            </>
          </div>
          {/* end of all comments */}

          <div className="container bg-white mx-auto my-14 px-4 lg:px-0">
            <CommentForm post={post} />
          </div>
          <div className="container mx-auto px-4 lg:px-0">
            <PostAccordion />
          </div>
        </div>
      </>
    );
  }

  return <TaxonomyPage params={params} />;
}
