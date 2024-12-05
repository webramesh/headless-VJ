import React from 'react';
import Banner from '../Components/Banner';
import AuthorHero from '../author/Components/AuthorHero';
import SiteContent from '../../app/sitemap/Components/SiteContent';

export const metadata = {
  title: 'Sitemap | Vinjournalen.se',
  description: 'Explore all pages on our site.',
};

export default async function SitemapPage() {
  return (
    <div className="container mx-auto">
      <Banner variant="default" />
      <AuthorHero title="SiteMap" />
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 lg:flex-row gap-8 lg:gap-12 mt-8 lg:mt-12">
        <SiteContent />
      </div>
    </div>
  );
}
