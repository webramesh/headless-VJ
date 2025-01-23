export const formatEmbeddedContent = (html, wordLimit = 20) => {
  const strippedHtml = html?.replace(/<[^>]+>/g, ''); // Strip HTML tags
  const words = strippedHtml?.split(/\s+/); // Split by spaces

  if (wordLimit === 'all') {
    return strippedHtml; // Return all words if "all" is specified
  }

  return words?.slice(0, wordLimit).join(' ') + (words?.length > wordLimit ? '...' : ''); // Return limited words with ellipsis if truncated
};

export const validateCommentForm = ({ authorName, authorEmail, content }) => {
  const errors = {};

  if (!authorName.trim()) {
    errors.authorName = 'Name is required.';
  }

  if (!authorEmail.trim()) {
    errors.authorEmail = 'Email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(authorEmail.trim())) {
    errors.authorEmail = 'Enter a valid email address.';
  }

  if (!content.trim()) {
    errors.content = 'Comment is required.';
  }

  return errors;
};

export const extractFields = (products) => {
  const containerTypes = new Map();
  const sortiments = new Map();
  let organicCount = 0;
  let sustainableCount = 0;
  let maxPrice = 0,
    minPrice = 0;
  let maxVolume = 0,
    minVolume = 0;
  if (!products)
    return {
      containerTypes: [],
      sortiments: [],
      organicCount,
      sustainableCount,
      priceRange: { maxPrice, minPrice },
      volumeRange: { maxVolume, minVolume },
    };
  products.forEach((product) => {
    const { fieldsProduct } = product;
    if (!fieldsProduct) return; // Guard clause if fieldsProduct is not defined

    const { wineSortiment, containerType, productLabels, pice, bottlePackageVolume } = fieldsProduct;
    const { organicWine, sustainable } = productLabels;

    if (pice != null) {
      // Ensure pice is not undefined or null
      maxPrice = Math.max(maxPrice, pice);
    }

    // Calculate max and min volumes
    if (bottlePackageVolume != null) {
      // Ensure volume is not undefined or null
      maxVolume = Math.max(maxVolume, bottlePackageVolume);
    }
    if (containerType) {
      containerTypes.set(containerType, (containerTypes.get(containerType) || 0) + 1);
    }

    wineSortiment?.forEach((item) => {
      if (item) {
        sortiments.set(item, (sortiments.get(item) || 0) + 1);
      }
    });

    if (organicWine) {
      organicCount++;
    }
    if (sustainable) {
      sustainableCount++;
    }
  });

  return {
    containerTypes: [...containerTypes.entries()],
    sortiments: [...sortiments.entries()],
    organicCount,
    sustainableCount,
    priceRange: { maxPrice, minPrice },
    volumeRange: { maxVolume, minVolume },
  };
};

export const extractFieldsForFilteredProducts = (products) => {
  const containerTypes = new Map();
  const sortiments = new Map();
  let organicCount = 0;
  let sustainableCount = 0;

  products?.forEach((product) => {
    const { fieldsProduct } = product;
    if (!fieldsProduct) return; // Guard clause if fieldsProduct is not defined

    const { wineSortiment, containerType, productLabels } = fieldsProduct;
    const { sustainable, organicWine } = productLabels;
    if (containerType) {
      containerTypes.set(containerType, (containerTypes.get(containerType) || 0) + 1);
    }

    wineSortiment?.forEach((item) => {
      if (item) {
        sortiments.set(item, (sortiments.get(item) || 0) + 1);
      }
    });

    if (organicWine) {
      organicCount++;
    }
    if (sustainable) {
      sustainableCount++;
    }
  });

  return {
    containerTypes: [...containerTypes.entries()],
    sortiments: [...sortiments.entries()],
    organicCount,
    sustainableCount,
  };
};

export const filterProducts = (products, filters) => {
  const { storlek, pris, typ, sortiment, ekologisk, hallbar } = filters;
  const [minVolume, maxVolume] = storlek;
  const [minPrice, maxPrice] = pris;
  const filteredProducts = products?.filter((product) => {
    const {
      bottlePackageVolume: volume,
      pice: price,
      containerType,
      wineSortiment,
      productLabels,
    } = product.fieldsProduct;
    const { organicWine, sustainable } = productLabels;

    const lowerSortiments = wineSortiment?.map((sortiment) => sortiment.toLowerCase());

    // Check each condition only if the filter is provided
    const priceCondition = pris ? minPrice <= price && price <= maxPrice : true;
    const volumeCondition = storlek ? minVolume <= volume && volume <= maxVolume : true;
    const typeCondition = typ ? containerType?.toLowerCase() === typ : true;
    const sortimentCondition = sortiment ? lowerSortiments?.includes(sortiment) : true;
    const sustainabilityCondition = hallbar ? sustainable : true;
    const organicCondition = ekologisk ? organicWine : true;

    return (
      priceCondition &&
      volumeCondition &&
      typeCondition &&
      sortimentCondition &&
      sustainabilityCondition &&
      organicCondition
    );
  });
  return filteredProducts;
};

// meta data for pages

export function generateSeoMetadata(seo) {
  if (!seo) return null;

  // Convert robots array to string format
  const robotsMeta = seo?.robots?.join(', ') || 'index, follow';

  // Convert focus keywords array to comma-separated string
  const keywords = seo?.focusKeywords?.join(', ') || '';

  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: seo?.title,
    description: seo?.description,
    robots: robotsMeta,
    icons: {
      icon: '/favicon.png',
    },
    keywords: [keywords],
    openGraph: {
      title: seo?.openGraph?.title,
      description: seo?.openGraph?.description,
      url: seo?.openGraph?.url,
      siteName: seo?.openGraph?.siteName,
      images: [
        {
          url: seo?.openGraph?.image?.url || '/vj-og.jpg',
          width: seo?.openGraph?.image?.width,
          height: seo?.openGraph?.image?.height,
          alt: seo?.openGraph?.title,
        },
      ],
      locale: seo?.openGraph?.locale,
      type: seo?.openGraph?.type,
    },
    twitter: {
      card: seo?.openGraph?.twitterMeta?.card,
      title: seo?.openGraph?.twitterMeta?.title,
      description: seo?.openGraph?.twitterMeta?.description,
      image: seo?.openGraph?.twitterMeta?.image,
      site: seo?.openGraph?.twitterMeta?.site,
      creator: seo?.openGraph?.twitterMeta?.creator,
    },
    alternates: {
      canonical: seo?.canonicalUrl,
    },
  };
}

export function findDepth(node, allNodes) {
  let depth = 0;
  let currentNode = node;
  while (currentNode?.parent) {
    depth += 1;
    const parentName = currentNode.parent.node.name;
    currentNode = allNodes?.find((n) => n.name === parentName);
  }
  return depth;
}

export function countProductsByCountry(products) {
  const countryCounts = new Map();

  products.forEach((product) => {
    const primaryCountries = product.produktslander.nodes.filter((node) => node.parent === null);

    primaryCountries.forEach((country) => {
      const currentCount = countryCounts.get(country.slug) || 0;
      countryCounts.set(country.slug, currentCount + 1);
    });
  });

  // Optional: Convert to array if needed, or you can work directly with the Map.
  const countryCountArray = Array.from(countryCounts)
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count);

  return countryCountArray; // or return countryCounts for Map format
}

export const formatExternalUrl = (url) => {
  if (!url) return '#';
  // Add https if protocol is missing
  return url.startsWith('http') ? url : `https://${url}`;
};

export const convertToWebP = (imagePath) => {
  // if (!imagePath) return imagePath;

  // Check if the path ends with jpg or jpeg
  if (imagePath.toLowerCase().endsWith('.jpg') || imagePath.toLowerCase().endsWith('.jpeg')) {
    // Replace the extension with .webp
    return imagePath.replace(/\.(jpg|jpeg)$/i, '.webp');
  }

  return imagePath;
};
