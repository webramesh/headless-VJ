'use client';
import React from 'react';
import Image from 'next/image';
import food1 from '@/public/food1.png';
import fb from '@/public/fb.png';
import insta from '@/public/insta.png';
import Accordion from '../../Components/Accordion';
import CatAccordion from './CatAccordion';
import ProductRecom from './ProductRecom';
import Link from 'next/link';

const PostDetailsContent = ({ content }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
          <div className="shadow-2xl p-4 lg:p-16">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* <ProductRecom /> */}
          {/* <div className="w-full mt-8 bg-[#eb7272]">
            <div className="p-4 lg:p-6">
              <h1 className=" text-white text-2xl lg:text-4xl mb-4">Vill du ha vårt nyhetsbrev?</h1>
              <h3 className=" text-white text-sm lg:text-base mb-6">
                Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="mr-4" />
                  <label htmlFor="privacy" className="text-white text-xs lg:text-sm">
                    Jag godkänner integritetspolicy
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-full  text-sm py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Ja, skicka till mig!
                </button>
              </form>
            </div>
          </div>
          <div className="bg-[#F9F9F9] shadow-lg mt-12 hover:shadow-xl p-4 lg:p-8">
            <div className="items-start  text-xl lg:text-2xl">Skribent</div>
            <div className="flex flex-col lg:flex-row mt-6 gap-4 lg:gap-8">
              <div className="rounded-full overflow-hidden w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                <div className="relative w-full h-full">
                  <Image src={food1} alt="Food 1" layout="fill" objectFit="cover" className="rounded-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className=" text-lg lg:text-xl hover:text-red-600">Jeanette Gardner</div>
                <div className=" text-sm lg:text-lg">
                  Jag är sedan 2014 redaktör och receptmakare för Vinjournalen.se. Författare och skribent, har arbetat
                  internationellt i flera länder och i Sverige. Bor i skärgården utanför Stockholm och brinner för mat
                  och vin.
                </div>
                <div className="flex gap-2">
                  <div>
                    <Image src={insta} alt="Instagram" width={24} height={24} className="object-cover" />
                  </div>
                  <div>
                    <Image src={fb} alt="Facebook" width={24} height={24} className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12  text-base lg:text-lg hover:text-red-600">Previous</div>
          <div className=" text-base lg:text-lg hover:text-red-600">Historien om de Chilenska vinerna</div>
          <div className=" text-xl lg:text-2xl mt-6">Lämna ett svar</div>
          <div className=" text-xs lg:text-sm">
            <i>Din e-postadress kommer inte publiceras. Obligatoriska fält är märkta *</i>
          </div>
          <form className="mt-8">
            <div className="flex flex-wrap mb-4">
              <textarea placeholder="Comment" className="w-full p-2 border rounded mb-4" rows="4" required></textarea>
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
                required
              />
              <input type="url" placeholder="Website" className="w-full lg:w-1/3 p-2 border rounded mb-2" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Are you a human? Please solve:</label>
              <input type="text" className="w-full lg:w-1/5 p-2 border rounded" required />
            </div>
          </form>
          <button
            type="submit"
            className="rounded-md  text-base lg:text-lg py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Publicera Kommentar
          </button>

          <div className="mt-6">
            <CatAccordion />
          </div> */}
        </div>

        {/* Right Section */}
      </div>
    </div>
  );
};

export default PostDetailsContent;
