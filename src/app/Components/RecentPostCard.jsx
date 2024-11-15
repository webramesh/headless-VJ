import Image from 'next/image';
import Link from 'next/link';
import { formatEmbeddedContent } from '../../utils/utils';

export default function RecentPostCard({ post }) {
  const { title, excerpt, date, slug, featuredImage, author, categories } = post;

  const formattedDate = new Date(date).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedExcerpt = formatEmbeddedContent(excerpt);

  return (
    <Link href={`/post/${slug}`}>
      <div className="cursor-pointer hover:shadow-lg transition-shadow my-10">
        {featuredImage && featuredImage.node && (
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText || title}
            width={400}
            height={200}
            className="object-cover w-full h-48"
          />
        )}
        <div className="p-4 bg-[#f5f5f5]">
          <h3 className="font-medium text-black text-lg">{title}</h3>
          <p className="mt-2 text-gray-900 text-xs">{formattedDate}</p>
          {author && author.node && <p className="text-[#694848] text-xs mt-2">{author.node.name}</p>}
          <p className="text-xs text-gray-900 font-extralight mt-2 leading-relaxed">{formattedExcerpt}</p>
          {categories && categories.nodes && categories.nodes.length > 0 && (
            <div className="mt-2">
              {categories.nodes.map((category) => (
                <span
                  key={category.slug}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
