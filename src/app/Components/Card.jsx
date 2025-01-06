import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, subtitle, posts }) => {
  if (posts?.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className=" text-center font-extralight text-red-500">{title}</div>
      <div className="text-center  text-xl md:text-2xl font-medium mt-4">{subtitle}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {posts?.map((post) => (
          <Link href={`/${post.categories.nodes[0].slug}/${post.slug}`} key={post.id}>
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <Image
                src={post.featuredImage?.node?.sourceUrl || '/placeholder.svg'}
                alt={post.featuredImage?.node?.altText || post.title}
                width={400}
                height={300}
                className="object-cover w-full h-48 md:h-56 lg:h-64"
              />
              <div className="p-4 bg-[#f5f5f5] flex-grow">
                <h3 className=" font-medium text-black text-lg">{post.title}</h3>
                <p className="mt-2  text-gray-900 text-xs">{new Date(post.date).toLocaleDateString('sv-SE')}</p>
                <p className="text-[#694848] text-xs  mt-2">{post.author?.node?.name}</p>
                <p className=" text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                  {post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').slice(0, 100) + '...' : ''}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
