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
import { generateSeoMetadata } from '@/src/utils/utils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const { slug, category } = params;

  const post = await getPostBySlug(slug);

  const { seo } = post;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

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

          {faqItems.length > 0 && (
            <div className="container mx-auto px-4 lg:px-0">
              <div
                className="
                mt-6 sm:mt-10 lg:mt-24 
                mx-0 sm:mx-4 lg:mx-56 
                px-2 sm:px-3
              "
              >
                <h2
                  className="
                  font-medium 
                  text-lg sm:text-xl lg:text-xl 
                  mb-3 sm:mb-4
                  pl-1 sm:pl-2
                "
                >
                  Frågor och Svar
                </h2>
                <div
                  className="
                  w-full 
                  max-w-full 
                  mx-auto
                "
                >
                  <AccordionNew
                    faqItems={faqItems}
                    className="
                      space-y-2 sm:space-y-3
                      w-full 
                      px-1 sm:px-2 
                      max-w-full
                    "
                  />
                </div>
              </div>
            </div>
          )}

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
              <h3 className="font-semibold text-2xl mb-2 text-center">All Comments </h3>
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
