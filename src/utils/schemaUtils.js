import { formatEmbeddedContent } from './utils';

export const navSchema = {
  '@context': 'http://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Navigation Menu',
  hasPart: [
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-och-mat/',
      name: 'Vin & Mat',
      url: 'https://www.vinjournalen.se/vin-och-mat/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-fakta/',
      name: 'Vinfakta',
      url: 'https://www.vinjournalen.se/vin-fakta/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-tips/',
      name: 'Vintips',
      url: 'https://www.vinjournalen.se/vin-tips/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-skola/',
      name: 'Vinskola',
      url: 'https://www.vinjournalen.se/vin-skola/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-tester/',
      name: 'Tester',
      url: 'https://www.vinjournalen.se/vin-tester/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/ekologiskt/',
      name: 'Ekologiskt',
      url: 'https://www.vinjournalen.se/ekologiskt/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/online/',
      name: 'Vin på nätet',
      url: 'https://www.vinjournalen.se/online/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/rott-vin/',
      name: 'Rött Vin',
      url: 'https://www.vinjournalen.se/drycker/rott-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/vitt-vin/',
      name: 'Vitt Vin',
      url: 'https://www.vinjournalen.se/drycker/vitt-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/rose-vin/',
      name: 'Rosé Vin',
      url: 'https://www.vinjournalen.se/drycker/rose-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/dessert-vin/',
      name: 'Dessert Vin',
      url: 'https://www.vinjournalen.se/drycker/dessert-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/mousserande-vin/',
      name: 'Mousserande Vin',
      url: 'https://www.vinjournalen.se/drycker/mousserande-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/ovrigt-vin/',
      name: 'Övrigt Vin',
      url: 'https://www.vinjournalen.se/drycker/ovrigt-vin/',
    },
  ],
};

export function breadcrumbSchemaGenerator(array) {
  const breadcrumbs = {
    '@context': 'http://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Allt om Vin',
        item: 'https://www.vinjournalen.se/',
      },
      ...array.map((item, index) => {
        return {
          '@type': 'ListItem',
          position: index + 2, // Start positions from 2
          name: item.name,
          item: item.url,
        };
      }),
    ],
  };
  return JSON.stringify(breadcrumbs);
}

export function faqSchemaGenerator(array) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: array.map((item) => {
      return {
        '@type': 'Question',
        name: item.faqQuestion,
        acceptedAnswer: {
          '@type': 'Answer',
          text: formatEmbeddedContent(item.faqAnswer, 'all'),
        },
      };
    }),
  };
  return JSON.stringify(schema);
}

export function postSchemaGenerator(post) {
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vinjournalen.se/${post.uri}/`,
    },
    headline: `${post.title}`,
    image:
      post?.featuredImage?.node?.sourceUrl ||
      'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
    datePublished: post?.date + '+01:00',
    dateModified: post?.modified + '+01:00',
    author: {
      '@type': 'Person',
      name: post?.author?.node?.name || 'Jeanette Gardner',
      url: `https://www.vinjournalen.se/author/${post?.author?.node?.slug || 'gardner_vjnln901'}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinjournalen.se',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
      },
    },
    description: formatEmbeddedContent(post?.excerpt, 'all'),
    url: `https://www.vinjournalen.se/${post.uri}/`,
  };
  return JSON.stringify(postSchema);
}

export function newsSchemaGenerator(nyhet) {
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vinjournalen.se/nyheter/${nyhet.slug}/`,
    },
    headline: `${nyhet.title}`,
    image:
      nyhet?.featuredImage?.node?.sourceUrl ||
      'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
    datePublished: nyhet?.date + '+01:00',
    dateModified: nyhet?.modified + '+01:00',
    author: {
      '@type': 'Person',
      name: nyhet?.author?.node?.name || 'Jeanette Gardner',
      url: `https://www.vinjournalen.se/author/${nyhet?.author?.node?.slug || 'gardner_vjnln901'}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinjournalen.se',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
      },
    },
    description: formatEmbeddedContent(nyhet?.excerpt, 'all'),
    url: `https://www.vinjournalen.se/nyheter/${nyhet.slug}/`,
  };
  return JSON.stringify(postSchema);
}

export function productSchemaGenerator(product) {
  const validUntil = new Date();
  validUntil.setMonth(validUntil.getMonth() + 3);
  const productSchema = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    url: `https://www.vinjournalen.se/produkter/${product?.slug}`,
    name: product?.title,
    image: product?.featuredImage?.node?.sourceUrl,
    description: product?.fieldsProduct?.productShortText,
    productID: product?.id,
    sku: product?.id,
    offers: {
      '@type': 'Offer',
      url: `https://www.vinjournalen.se/produkter/${product?.slug}`,
      priceCurrency: 'SEK',
      price: product?.fieldsProduct?.pice,
      availability: product?.fieldsProduct?.buyLink ? 'InStock' : 'OutOfStock',
      ...(product?.fieldsProduct?.buyLink && { itemCondition: 'NewCondition' }),
      priceValidUntil: validUntil.toISOString().split('T')[0],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4',
      reviewCount: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Vinjournalen',
        },
        reviewBody: `fantastiskt vin! ${product?.fieldsProduct?.productShortText}`,
      },
    ],

    ...(product?.fieldsProduct?.produkterproducer?.nodes[0]?.title && {
      brand: {
        '@type': 'Brand',
        name: product.fieldsProduct.produkterproducer.nodes[0].title,
      },
    }),
    ...(product?.produktslander?.nodes?.find((node) => !node.parent)?.name && {
      countryOfOrigin: {
        '@type': 'Country',
        name: product.produktslander.nodes.find((node) => !node.parent).name,
      },
    }),
  };
  return JSON.stringify(productSchema);
}

export function profilePageSchemaGenerator(profile) {
  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile?.name || 'Vinjournalen.se',
    description: profile?.description,
    url: `https://www.vinjournalen.se/author/${profile.slug}/`,
    sameAs: profile.seo?.additionalProfiles || [],
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': `https://www.vinjournalen.se/author/${profile.slug}/`,
      name: profile?.seo?.title || profile?.name,
      description: profile?.seo?.description || profile?.description,
    },
    image: {
      '@type': 'ImageObject',
      '@id': `https://www.vinjournalen.se/author/${profile.slug}/`,
      url:
        profile.customAvatar ||
        'https://www.admin.vinjournalen.se/wp-content/uploads/2023/07/VinjournalenLogotype_symbol.jpg',
      caption: profile?.name,
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Vinjournalen.se',
    },
  };
  return JSON.stringify(profileSchema);
}
