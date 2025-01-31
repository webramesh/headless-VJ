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
import RelatedPosts from './components/RelatedPosts';
import Banner from '../../Components/Banner';
import { breadcrumbSchemaGenerator, postSchemaGenerator } from '@/src/utils/schemaUtils';

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
    const taxonomy = await getTaxonomySEO(category, slug);
    if (taxonomy) {
      const { seo } = taxonomy;
      if (seo) {
        return generateSeoMetadata(seo);
      }
    }
    return null;
  }
}

export default async function PostDetails({ params }) {
  const { category, slug } = params;

  const allCategories = await getAllCategories();
  const categories = allCategories.map((category) => category.slug);

  if (categories.includes(category)) {
    const post = await getPostBySlug(slug);

    const relatedPosts = post?.realatedPosts?.relatedPosts?.nodes;

    const postProductRecommendation = await getPostProductRecommendationBySlug(slug);

    if (!post) {
      return <div className="container mx-auto px-4 py-8">Inlägget hittades inte</div>;
    }

    // Extract FAQ items from the post data
    const faqItems = post.faq?.faq || [];

    const postSchema = postSchemaGenerator(post);

    const breadcrumbs = breadcrumbSchemaGenerator([
      { name: post?.categories?.nodes[0].name, url: `https://www.vinjournalen.se/${category}/` },
      { name: post?.title, url: `https://www.vinjournalen.se/${category}/${slug}/` },
    ]);

    return (
      <>
        <script
          className="rank-math-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: postSchema }}
        />
        <script
          type="application/ld+json"
          className="rank-math-schema"
          dangerouslySetInnerHTML={{ __html: breadcrumbs }}
        />

        <div className="bg-slate-50 min-h-full">
          <PostDetailsHero
            title={post?.title}
            featuredImage={post?.featuredImage?.node?.sourceUrl}
            sizes={post?.featuredImage?.node?.sizes}
            authorImage={post?.author?.node?.customAvatar}
            authorName={post?.author?.node?.name}
            authorSlug={post?.author?.node?.slug}
            date={post?.date}
            categoryName={post?.categories?.nodes[0]?.name}
            categories={post?.categories?.nodes[0]}
          />
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-28 xl:mx-36 lg:-mt-16 z-10">
              <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
                <div className="shadow-2xl p-4 lg:p-16">
                  <PostDetailsContent content={post?.content} />
                  <div className="container mx-auto">
                    {faqItems.length > 0 && (
                      <h2 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 pl-1 sm:pl-2">
                        Frågor och Svar
                      </h2>
                    )}
                    {faqItems.length > 0 && (
                      <AccordionNew
                        faqItems={faqItems}
                        className="space-y-2 sm:space-y-3 w-full px-1 sm:px-2 max-w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-0">
            <div className="mt-6 sm:mt-10 lg:mt-24 mx-0 sm:mx-4 lg:mx-56 px-2 sm:px-3">
              <div className="w-full max-w-full mx-auto">
                {relatedPosts && relatedPosts.length > 0 && (
                  <div className="my-16">
                    <RelatedPosts relatedPosts={relatedPosts} />
                  </div>
                )}
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
        </div>
      </>
    );
  }

  return (
    <>
      <Banner variant="default" />
      <TaxonomyPage params={params} />
    </>
  );
}
