'use client';
import React from 'react';
import Image from 'next/image';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
const PostDetailsContent = ({ content, title }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
          <div className="shadow-2xl p-4 lg:p-16">
            <div className="content">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="flex p-4 gap-6 items-center justify-end ">
              <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={message} alt="Messagebox" className="object-cover" />
              </EmailShareButton>
              <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={fb} alt="Facebook icon" className="object-cover cursor-pointer" />
              </FacebookShareButton>
              <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={twitter} alt="Twitter" className="object-cover cursor-pointer" />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsContent;
