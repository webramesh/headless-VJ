'use client';

import React from 'react';
import PostAccordion from '../../Components/PostAccordion';
import Breadcrumb from '../../Components/breadcrumb/BreadCrumb';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';

export const revalidate = 60;
const NyheterContent = ({ nyhet }) => {
  if (!nyhet) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col mt-12 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-52 p-4 sm:p-6 shadow-2xl">
        <Breadcrumb title1="nyheter" link1="/nyheter" title2={nyhet.title} />
        <div className="text-2xl sm:text-3xl md:text-4xl">
          <h1>{nyhet.title}</h1>
        </div>
        <div className="content">
          <div className="text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: nyhet.content }} />
        </div>
        {/* Comment Form */}
        {/* <div className="text-xl lg:text-2xl mt-6">Lämna ett svar</div>
        <div className="text-xs lg:text-sm">
          <i>Din e-postadress kommer inte publiceras. Obligatoriska fält är märkta *</i>
        </div>
        <form className="mt-8">
          <div className="flex flex-col sm:flex-row flex-wrap mb-4">
            <textarea placeholder="Comment" className="w-full p-2 border rounded mb-4" rows="4" required />
            <input
              type="text"
              placeholder="Name"
              className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
              required
            />
            <input type="url" placeholder="Website" className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Are you a human? Please solve:</label>
            <input type="text" className="w-full sm:w-1/2 lg:w-1/5 p-2 border rounded" required />
          </div>
          <button
            type="submit"
            className="rounded-md text-base lg:text-lg py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Publicera Kommentar
          </button>
        </form> */}

        {/* Newsletter Subscription */}
        <SubscriptionForm />
        <div className="mt-6">
          <PostAccordion />
        </div>
      </div>
    </div>
  );
};

export default NyheterContent;
