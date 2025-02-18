import { getAuthorBySlug, getAllAuthors } from '../../../lib/api/authorApi';
import AuthorCard from '../Components/AuthorCard';
import AuthorHero from '../Components/AuthorHero';
import WineTourism from '../../Components/WineTourism';
import SenasteNytt from '../../Components/SenasteNytt';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import SubscriptionBox from '../../Components/subscription/SubscriptionBox';
import Image from 'next/image';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator, profilePageSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const data = await getAuthorBySlug(params?.slug);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function AuthorPage({ params }) {
  const author = await getAuthorBySlug(params.slug);

  if (!author) {
    return <div>Författaren hittades inte</div>;
  }

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Author arkiv', url: 'https://www.vinjournalen.se/' },
    {
      name: `Author: ${author.name}, Utgivare på — Vinjournalen.se`,
      url: `https://www.vinjournalen.se/author/${params.slug}/`,
    },
  ]);

  const authorSchema = profilePageSchemaGenerator(author);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: authorSchema }}
      />
      <AuthorHero title="Author" />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center md:w-1/3">
            <Image
              width={300}
              height={300}
              src={author.customAvatar || '/placeholder.svg?height=384&width=384'}
              alt={`${author.name} Avatar`}
              className="w-48 h-48 md:w-96 md:h-96 max-w-full rounded-full object-cover p-10"
            />
          </div>
          <div className="md:w-2/3 md:pl-8 p-4">
            <h2 className="text-xl font-bold mt-4 md:mt-0">{author.name}</h2>
            <p className="text-base mt-2 mr-4 md:mr-36">{author.description}</p>
          </div>
        </div>
        <div className="container mx-auto p-5">
          <div className="content">
            {/* <h2 className="text-xl font-bold mt-4 md:mt-0">Om mig själv</h2> */}
            <div
              className="text-base mt-2 mr-4 md:mr-36"
              dangerouslySetInnerHTML={{ __html: author.authorDescriptionInfo.userDescriptionInfo }}
            />
          </div>
        </div>
      </div>
      <AuthorCard
        title="FRÅN FÖRFATTARE"
        subtitle={`Läs fler artiklar från ${author.name}`}
        posts={author.posts?.nodes || []}
      />
      <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
        <div className="col-span-4">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2 mt-8 md:mt-0">
          <SubscriptionBox />
        </div>
      </div>
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="flex items-center md:w-2/3 p-10">
          <WineTourism />
        </div>
        <div className="flex items-center md:w-1/3 p-10">
          <SenasteNytt />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const authors = await getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}
