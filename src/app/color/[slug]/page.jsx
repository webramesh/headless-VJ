import React from 'react';
import { getColorBySlug, getAllColors } from '../../../lib/api/colorApi';
import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';
import Subscription from '../../Components/Subscription';
import AuthorHero from '../../Components/AuthorHero';
import ColorCard from '../Components/ColorCard';

export async function generateMetadata({ params }) {
  const color = await getColorBySlug(params.slug);
  return {
    title: `${color.name} Wines`,
    description: `Explore wines related to the ${color.name} color`,
  };
}

export default async function ColorPage({ params }) {
  const color = await getColorBySlug(params.slug);

  if (!color) {
    return <div>Color not found</div>;
  }

  return (
    <div>
      <AuthorHero title={color.name} />
      <div className="container mx-auto flex flex-col w-full py-10">
        <h2 className="items-start text-black text-2xl w-full">Alla viner relaterade till {color.name} färg</h2>
      </div>
      <div className="container mx-auto px-4">
        <ColorCard products={color.produkter.nodes} />
      </div>
      <Subscription />
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="flex items-center md:w-2/3 p-10">
          <WineTourism />
        </div>
        <div className="flex items-center md:w-1/3 p-10">
          <SenasteNytt />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const colors = await getAllColors();
  return colors.map((color) => ({
    slug: color.slug,
  }));
}
