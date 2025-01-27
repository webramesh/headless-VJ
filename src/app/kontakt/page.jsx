import React from 'react';
import ContactForm from '../Components/contact/ContactForm.jsx';
import ContactInfo from '../Components/contact/ContactInfo.jsx';
// import Map from '../Components/Map';
import SubscriptionBox from '../Components/subscription/SubscriptionBox.jsx';
import SubscriptionForm from '../Components/subscription/SubscriptionForm.jsx';
import { generateSeoMetadata } from '@/src/utils/utils.js';
import { getPageBySlug } from '@/src/lib/api/pageApi.js';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils.js';

export async function generateMetadata() {
  const data = await getPageBySlug(`kontakt`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

const page = async () => {
  const schema = {
    '@context': 'http://schema.org/',
    '@type': 'Organization',
    name: 'Vinjournalen.se',
    logo: 'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
    url: 'https://www.vinjournalen.se',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bo Bergmans Gata 14',
      addressLocality: 'Stockholm',
      addressRegion: 'Stockholms län',
      postalCode: '115 50',
      addressCountry: 'SE',
    },
    sameAs: [
      'https://x.com/hashtag/Vinjournalen',
      'https://m.facebook.com/vinjournalen',
      'https://www.instagram.com/vinjournalen.se/',
    ],
  };

  const breadcrumbs = breadcrumbSchemaGenerator([{ name: 'Kontakt', url: 'https://www.vinjournalen.se/kontakt/' }]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      {/* <AuthorHero title={"KONTAKT"} /> */}
      <div className="container mx-auto max-w-6xl">
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-bold  text-center mb-10 ">KONTAKT</h2>
        </div>
        <p className="text-center mb-16 font-light md:max-w-4xl  text-gray-600 text-sm lg:text-base mx-4 md:mx-auto">
          För att vinjournalen ska vara en plats där alla vinfrågor besvaras är det viktigt att ni besökare bidrar med
          kommentarer och frågor. Vi bryr oss om era förslag och är tacksamma för feedback. Vare sig du inte hittar
          svaret på just din vinfråga eller vill påpeka att du gillar ett visst ämne, hör gärna av dig!
        </p>
        <div className="md:grid gap-12  md:grid-cols-2 mx-4 md:mx-auto justify-between">
          <div className="order-1 md:order-2 my-10">
            <ContactInfo />
          </div>
          <div className="order-2 md:order-1 my-10">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="container md:mx-auto max-w-6xl mt-16 ">
        {/* <div className="h-[50vh] w-full mx-4 md:mx-auto">
          <Map />
        </div> */}

        <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14  my-10">
          <div className="col-span-4 px-4 md:px-0 ">
            <SubscriptionForm />
          </div>
          <div className="w-full grid col-span-2 mt:pt-0 pt-6 md:px-0 px-4">
            <SubscriptionBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
