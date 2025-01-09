'use client';
import React from 'react';
import Image from 'next/image';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
import parse, { domToReact, Element, attributesToProps } from 'html-react-parser';

const PostDetailsContent = ({ content, title }) => {
  const options = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'img') {
        const { src, alt, width, height, loading, decoding, sizes, ...rest } = domNode.attribs;
        return (
          <Image
            src={src}
            alt={alt || ''}
            width={width ? parseInt(width) : 1}
            height={height ? parseInt(height) : 1}
            loading={loading || 'lazy'}
            decoding={decoding || 'async'}
            sizes={sizes || '100vw'}
            style={{
              width: '100%',
              height: 'auto',
            }}
            {...attributesToProps(rest)}
          />
        );
      }
      if (domNode instanceof Element && domNode.name === 'figure') {
        const { class: className, ...rest } = domNode.attribs;
        return (
          <figure className={className} {...attributesToProps(rest)}>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
    },
  };

  const parsedContent = parse(content, options);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
          <div className="shadow-2xl p-4 lg:p-16">
            <div className="content">
              <div className="prose prose-lg max-w-none">{parsedContent}</div>
            </div>
            <div className="flex p-4 gap-6 items-center justify-end ">
              <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={message} alt="Messagebox" className="object-cover" width={24} height={24} />
              </EmailShareButton>
              <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={fb} alt="Facebook icon" className="object-cover cursor-pointer" width={24} height={24} />
              </FacebookShareButton>
              <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={twitter} alt="Twitter" className="object-cover cursor-pointer" width={24} height={24} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsContent;
