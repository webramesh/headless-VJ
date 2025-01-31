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
        const { src, alt, width, height, loading, decoding, ...rest } = domNode.attribs;
        return (
          <Image
            src={src}
            alt={alt || ''}
            width={width ? parseInt(width) : 1000}
            height={height ? parseInt(height) : 1000}
            loading={loading || 'lazy'}
            decoding={decoding || 'async'}
            style={{
              maxWidth: '100%',
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
    <>
      <div className="content">
        <div className="prose prose-lg max-w-none">{parsedContent}</div>
      </div>
      <div className="flex p-4 gap-6 items-center justify-end">
        <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
          <Image src={message} alt="Messagebox" className="object-cover w-4 md:w-5 lg:w-6" width={24} height={24} />
        </EmailShareButton>
        <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
          <Image
            src={fb}
            alt="Facebook icon"
            className="object-cover cursor-pointer w-4 md:w-5 lg:w-6"
            width={24}
            height={24}
          />
        </FacebookShareButton>
        <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
          <Image
            src={twitter}
            alt="Twitter"
            className="object-cover cursor-pointer w-4 md:w-5 lg:w-6"
            width={24}
            height={24}
          />
        </TwitterShareButton>
      </div>
    </>
  );
};

export default PostDetailsContent;
