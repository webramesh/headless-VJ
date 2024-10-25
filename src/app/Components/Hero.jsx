import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { formatEmbeddedContent } from '@/src/utils/utils';

const Hero = ({ posts }) => {
  return (
    <div className="container mt-6 mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Article */}
        <Link href={`/article/${posts[0].slug}`} className="w-full lg:w-1/2 bg-[#f5f5f5] overflow-hidden">
          <div className="relative w-full">
            <div className="relative w-full h-0 pb-[66.67%] sm:pb-[50%] lg:pb-[66.67%]">
              <div className="w-full h-full">
                <Image
                  src={posts[0]?.featuredImage?.node?.mediaItemUrl}
                  alt={posts[0]?.title}
                  fill
                  priority
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  blurDataURL="/search.png"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className=" font-medium text-black text-lg mt-4 sm:mt-8">{posts[0]?.title}</h2>
            <p className="mt-4  text-gray-900 text-xs">{format(new Date(posts[0]?.date), 'dd MMMM, yyyy')}</p>
            <p className="text-[#694848] text-xs  mt-2">{posts[0]?.author?.node?.name}</p>
            <p
              className=" text-sm text-gray-900 font-extralight mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatEmbeddedContent(posts[0].excerpt) }}
            ></p>
          </div>
        </Link>

        {/* Side Articles */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {posts?.map((post, index) => {
            if (index === 0) return;
            return (
              <div key={post.id}>
                <Link href={`/article/${post.slug}`}>
                  <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
                    <div className="relative h-48 sm:h-auto sm:w-1/3">
                      <Image
                        src={post.featuredImage.node.mediaItemUrl}
                        alt={post.title}
                        fill
                        priority
                        className="h-full w-full object-cover"
                        placeholder="blur"
                        blurDataURL="/search.png"
                      />
                    </div>
                    <div className="p-4 sm:w-2/3">
                      <h3 className=" font-medium text-black text-lg">{post.title}</h3>
                      <p className="mt-2  text-gray-900 text-xs">{format(new Date(post.date), 'dd MMMM, yyyy')}</p>
                      <p className="text-[#694848] text-xs  mt-2">{post?.author?.node?.name}</p>

                      <p
                        className=" text-sm text-gray-900 font-extralight mt-4 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatEmbeddedContent(post.excerpt) }}
                      ></p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="mt-8">
            <Link href="/target-page" passHref>
              <button className="w-full py-2  text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
                Se fler artiklar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
