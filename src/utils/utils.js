export const formatEmbeddedContent = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, ''); // Strip HTML tags
  const words = strippedHtml.split(/\s+/); // Split by spaces
  return words.slice(0, 20).join(' ') + '...'; // Join the first 50 words
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
    minPrice = Infinity;
  let maxVolume = 0,
    minVolume = Infinity;

  products.forEach((product) => {
    const { fieldsProduct } = product;
    if (!fieldsProduct) return; // Guard clause if fieldsProduct is not defined

    const { wineSortiment, containerType, productLabels, sustainable, pice, bottlePackageVolume } = fieldsProduct;

    if (pice != null) {
      // Ensure pice is not undefined or null
      maxPrice = Math.max(maxPrice, pice);
      minPrice = Math.min(minPrice, pice);
    }

    // Calculate max and min volumes
    if (bottlePackageVolume != null) {
      // Ensure volume is not undefined or null
      maxVolume = Math.max(maxVolume, bottlePackageVolume);
      minVolume = Math.min(minVolume, bottlePackageVolume);
    }
    if (containerType) {
      containerTypes.set(containerType, (containerTypes.get(containerType) || 0) + 1);
    }

    wineSortiment?.forEach((item) => {
      if (item) {
        sortiments.set(item, (sortiments.get(item) || 0) + 1);
      }
    });

    if (productLabels?.includes('Organic')) {
      organicCount++;
    }
    if (sustainable?.includes('Yes')) {
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

export const filterProducts = (products, filters) => {
  const { storlek, pris, typ, sortiment, ekologisk, hallbar } = filters;
  const [minVolume, maxVolume] = storlek;
  const [minPrice, maxPrice] = pris;
  const filteredProducts = products.filter((product) => {
    const {
      bottlePackageVolume: volume,
      pice: price,
      containerType,
      wineSortiment,
      sustainable,
      productLabels,
    } = product.fieldsProduct;

    const lowerSortiments = wineSortiment?.map((sortiment) => sortiment.toLowerCase());

    // Check each condition only if the filter is provided
    const priceCondition = pris ? minPrice <= price && price <= maxPrice : true;
    const volumeCondition = storlek ? minVolume <= volume && volume <= maxVolume : true;
    const typeCondition = typ ? containerType?.toLowerCase() === typ : true;
    const sortimentCondition = sortiment ? lowerSortiments?.includes(sortiment) : true;
    const sustainabilityCondition = hallbar ? sustainable?.includes('Yes') : true;
    const organicCondition = ekologisk ? productLabels?.includes('Organic') : true;

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
    title: seo?.title,
    description: seo?.description,
    robots: robotsMeta,
    icons: {
      icon: '/favicon.png',
    },
    keywords,
    openGraph: {
      title: seo?.openGraph?.title,
      description: seo?.openGraph?.description,
      url: seo?.openGraph?.url,
      siteName: seo?.openGraph?.siteName,
      images: [
        {
          url: seo?.openGraph?.image?.url,
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
    canonical: seo?.canonicalUrl,
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
