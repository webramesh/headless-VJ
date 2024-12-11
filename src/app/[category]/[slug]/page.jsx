import { getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import TaxonomyPage from '../Components/TaxonomyPage';
import { getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import AccordionNew from '../../Components/AccordionNew';
import ProductRecommendation from './components/ProductRecommendation';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import PostAccordion from '../../Components/PostAccordion';
import CommentForm from '../../Components/CommentForm';
import CommentsSection from '../../Components/CommentSection';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getTaxonomySEO } from '@/src/lib/api/taxonomyApi';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { category, slug } = params;

  const post = await getPostBySlug(slug);

  if (post) {
    const { seo } = post;
    if (seo) {
      return generateSeoMetadata(seo);
    }
  } else {
    const taxonomySeo = await getTaxonomySEO(category, slug);

    const { seo } = taxonomySeo;
    if (seo) {
      return generateSeoMetadata(seo);
    }
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
              <div className="mt-6 sm:mt-10 lg:mt-24 mx-0 sm:mx-4 lg:mx-56 px-2 sm:px-3">
                <h2 className="font-medium text-lg sm:text-xl lg:text-xl mb-3 sm:mb-4 pl-1 sm:pl-2">Frågor och Svar</h2>
                <div className="w-full max-w-full mx-auto">
                  <AccordionNew faqItems={faqItems} className="space-y-2 sm:space-y-3 w-full px-1 sm:px-2 max-w-full" />
                  <ProductRecommendation postProductRecommendation={postProductRecommendation} />
                  <div className="mt-12">
                    <SubscriptionForm />
                  </div>

                  {/* Comments Section */}
                  <CommentsSection comments={post?.comments?.nodes || []} />

                  <div className="mt-12">
                    <CommentForm data={post} />
                  </div>
                  <div className="mt-12">
                    <PostAccordion />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return <TaxonomyPage params={params} />;
}
