import {
  getAllPages,
  getAllOrdlistaPages,
  getAllNyheterPages,
  getAllPosts,
  getAllProducenter,
  getAllRegioner,
  getAllVinguide,
  getAllVinimporterer,
  getAllProdukter,
} from '../../../lib/api/sitemapApi';
import Link from 'next/link';

export const metadata = {
  title: 'Site Content | Vinjournalen.se',
  description:
    'Explore all content on our site including pages, ordlista, news, posts, producers, regions, wine guides, wine importers, and products.',
};

function ContentSection({ title, items, baseUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-gray-500 text-sm">Total: {items.length}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`${baseUrl}/${item.slug}/`}
            className="rounded transition-colors text-sm text-red-500 hover:text-red-700 truncate"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function SiteContent() {
  const [pages, ordlistaPages, nyheterPages, posts, producenter, regioner, vinguide, vinimporterer, produkter] =
    await Promise.all([
      getAllPages(),
      getAllOrdlistaPages(),
      getAllNyheterPages(),
      getAllPosts(),
      getAllProducenter(),
      getAllRegioner(),
      getAllVinguide(),
      getAllVinimporterer(),
      getAllProdukter(),
    ]);

  return (
    <div className="w-full px-2 sm:px-4 lg:px-6">
      <ContentSection title="Pages" items={pages} baseUrl="" />
      <ContentSection title="Ordlista" items={ordlistaPages} baseUrl="/ordlista" />
      <ContentSection title="Nyheter" items={nyheterPages} baseUrl="/nyheter" />
      <ContentSection title="Posts" items={posts} baseUrl="" />
      <ContentSection title="Producenter" items={producenter} baseUrl="/producenter" />
      <ContentSection title="Regioner" items={regioner} baseUrl="/regioner" />
      <ContentSection title="Vinguide" items={vinguide} baseUrl="/vinguide" />
      <ContentSection title="Vinimportörer" items={vinimporterer} baseUrl="/vinimportorer" />
      <ContentSection title="Produkter" items={produkter} baseUrl="/produkter" />
    </div>
  );
}
