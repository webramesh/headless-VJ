import { getPostBySlug } from '@/src/lib/api/postAPI';
import PostDetailsContent from '../Components/PostDetailsContent';
import PostDetailsHero from '../Components/PostDetailsHero';

export default async function PostDetails({ params }) {
  const { slug } = params;
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
