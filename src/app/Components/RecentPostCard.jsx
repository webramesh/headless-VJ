import Image from 'next/image';
import Link from 'next/link';
import { formatEmbeddedContent } from '@/src/utils/utils';

export default function RecentPostCard({ post }) {
  if (!post) {
    console.log('No post data available');
    return null;
  }

  const { title, excerpt, date, slug, featuredImage, author, categories } = post;

  // const formattedDate = date ? format(new Date(date), 'dd MMMM, yyyy') : 'Unknown date';

  const formattedExcerpt = excerpt ? formatEmbeddedContent(excerpt) : '';

  const categorySlug = categories?.nodes?.[0]?.slug || 'uncategorized';
  const postSlug = slug || '';

  return (
    <Link href={`/${categorySlug}/${postSlug}`} key={post.id || Math.random()} className="flex">
      <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow w-full my-6">
        <div className="relative w-full h-48">
          <Image
            src={featuredImage?.node?.sourceUrl || '/postplaceholder.jpg'}
            alt={featuredImage?.node?.altText || title || 'Featured image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
          <h3 className="font-outfit font-medium text-black text-lg">{title || 'Untitled'}</h3>
          {/* <p className="mt-2 font-outfit text-gray-900 text-xs">{formattedDate}</p> */}
          <p className="mt-2 font-outfit text-gray-900 text-xs">
          <span className="capitalize">
                {new Date(date).toLocaleDateString('sv-SE', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
          </p>
          {author?.node?.name && <p className="text-[#694848] text-xs font-outfit mt-2">{author.node.name}</p>}
          {formattedExcerpt && (
            <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed flex-grow">
              {formattedExcerpt}
            </p>
          )}
          {categories?.nodes?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.nodes.map((category) => (
                <span
                  key={category.slug || Math.random()}
                  className="flex flex-start mt-2 w-fit px-3 py-1 text-white font-outfit text-xs font-thin rounded-full"
                  style={{
                    backgroundColor: category.categoriesImagesAndOtherFields?.categorycolorpicker || '#000000'
                  }}
                >
                  {category.name || 'Uncategorized'}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

