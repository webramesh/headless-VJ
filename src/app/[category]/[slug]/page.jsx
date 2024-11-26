import { getAllCategories, getPostBySlug } from '@/src/lib/api/postAPI';
import TaxonomyPage from '../Components/TaxonomyPage';
import { getPostProductRecommendationBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';
import ProductRecommendation from './components/ProductRecommendation';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import PostAccordion from '../../Components/PostAccordion';
import CommentForm from '../../Components/CommentForm';
import CommentBox from '../../Components/CommentBox';

export async function generateMetadata({ params }) {
  const { slug, category } = params;

  const post = await getPostBySlug(slug);

  const { seo } = post;
  if (seo) {
    return {
      title: seo?.title || `${post?.title} - Vinjournalen.se`,
      description: seo?.description,
      canonicalUrl: seo?.canonicalUrl || `https://www.vinjournalen.se/${category}/${slug}`,
      openGraph: {
        locale: seo?.openGraph?.locale,
        type: seo?.openGraph?.type,
        title: seo?.openGraph?.title,
        description: seo?.openGraph?.description,
        url: seo?.openGraph?.url || `https://www.vinjournalen.se/${category}/${slug}`,
        siteName: seo?.openGraph?.siteName || 'Vinjournalen.se',
        image: {
          height: seo?.openGraph?.image?.height || 630,
          secureUrl:
            seo?.openGraph?.image?.secureUrl ||
            post?.featuredImage?.node?.sourceUrl ||
            'https://www.vinjournalen.se/default-image.jpg',
          type: seo?.openGraph?.image?.type || 'image/jpeg',
          url:
            seo?.openGraph?.image?.url ||
            post?.featuredImage?.node?.sourceUrl ||
            'https://www.vinjournalen.se/default-image.jpg',
          width: seo?.openGraph?.image?.width || 1200,
        },
        twitterMeta: {
          card: seo?.openGraph?.twitterMeta?.card || 'summary_large_image',
          description: seo?.openGraph?.twitterMeta?.description || post?.excerpt?.replace(/<\/?[^>]+(>|$)/g, ''),
          image:
            seo?.openGraph?.twitterMeta?.image ||
            post?.featuredImage?.node?.sourceUrl ||
            'https://www.vinjournalen.se/default-image.jpg',
          creator: seo?.openGraph?.twitterMeta?.creator || '@Vinjournalen',
          title: seo?.openGraph?.twitterMeta?.title || `${post?.title} - Vinjournalen.se`,
          site: seo?.openGraph?.twitterMeta?.site || '@Vinjournalen',
        },
      },
      robots: {
        index: seo?.robots?.includes('index') || true,
        follow: seo?.robots?.includes('follow') || true,
      },
    };
  }
}

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
