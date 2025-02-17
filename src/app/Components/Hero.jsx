import Image from 'next/image';
import Link from 'next/link';
import { convertToWebP, formatEmbeddedContent } from '@/src/utils/utils';
import { GLOBAL_BLUR_DATA_URL } from '@/src/utils/constants';

const Hero = ({ posts }) => {
  return (
    <div className="container mt-6 mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article */}

        <Link href={posts[0].uri} className="w-full lg:w-1/2 bg-[#f5f5f5] overflow-hidden">
          <div className="relative w-full">
            <div className="relative w-full h-0 pb-[66.67%] sm:pb-[50%] lg:pb-[66.67%]">
              <div className="absolute w-full h-full">
                <Image
                  src={
                    posts[0]?.featuredImage?.node?.sourceUrl
                      ? convertToWebP(posts[0]?.featuredImage?.node?.sourceUrl)
                      : '/postplaceholder.jpg'
                  }
                  alt={posts[0]?.featuredImage?.node?.altText || posts[0]?.title}
                  fill
                  priority
                  className="h-full w-full object-cover"
                  sizes={posts[0]?.featuredImage?.node?.sizes || '(max-width: 768px) 100vw, 50vw'}
                  placeholder="blur"
                  blurDataURL={GLOBAL_BLUR_DATA_URL}
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className=" font-medium text-black text-lg mt-4 sm:mt-8">{posts[0]?.title}</h2>
            <p className="mt-4  text-gray-900 text-xs capitalize">
              {new Date(posts[0]?.date).toLocaleDateString('sv-SE', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </p>

            <p className="text-[#694848] text-xs mt-2">{posts[0]?.author?.node?.name || 'Jeanette Gardner'}</p>
            <p
              className="text-sm text-gray-900 font-extralight mt-4 leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: formatEmbeddedContent(posts[0].excerpt, 'all') }}
            />
          </div>
        </Link>

        {/* Side Articles */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {posts?.map((post, index) => {
            if (index === 0) return;
            return (
              <div key={post.id}>
                <Link href={post?.uri}>
                  <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden lg:gap-0 xl:gap-4 lg:h-40 xl:h-48">
                    <div className="relative h-48 sm:h-auto lg:h-40 xl:h-auto sm:w-1/3 aspect-video">
                      <Image
                        src={
                          post?.featuredImage?.node?.sourceUrl
                            ? convertToWebP(post?.featuredImage?.node?.sourceUrl)
                            : '/postplaceholder.jpg'
                        }
                        alt={post?.featuredImage?.node?.altText || post?.title}
                        fill
                        className="object-cover md:object-contain"
                        sizes={
                          post?.featuredImage?.node?.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                        }
                        placeholder="blur"
                        blurDataURL={GLOBAL_BLUR_DATA_URL}
                      />
                    </div>
                    <div className="px-4 py-1 sm:w-2/3">
                      <h2 className="font-medium text-black text-lg max-h-14 overflow-hidden text-ellipsis line-clamp-2">
                        {post?.title}
                      </h2>
                      <p className="mt-2 text-gray-900 text-xs capitalize">
                        {new Date(post?.date).toLocaleDateString('sv-SE', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                      <p className="text-[#694848] text-xs mt-2">{post?.author?.node?.name || 'Jeanette Gardner'}</p>
                      <p
                        className="text-sm text-gray-900 font-extralight mt-2 leading-relaxed line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: formatEmbeddedContent(post?.excerpt, 'all') }}
                      ></p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="">
            <Link href="/artiklar/" passHref>
              <div className="w-full py-2 text-center text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
                Se fler artiklar
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
