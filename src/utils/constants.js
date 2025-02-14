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

export const menu = [
  {
    id: 'cG9zdDozMzI4NzE=',
    label: 'Vin & Mat',
    uri: '/vin-och-mat/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4Njk=',
    label: 'Vinfakta',
    uri: '/vin-fakta/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzA=',
    label: 'Vintips',
    uri: '/vin-tips/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzI=',
    label: 'Vinskola',
    uri: '/vin-skola/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzM=',
    label: 'Tester',
    uri: '/vin-tester/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzQ=',
    label: 'Ekologiskt',
    uri: '/ekologiskt/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzU=',
    label: 'Vin på nätet',
    uri: '/online/',
    parentId: null,
  },
  {
    id: 'cG9zdDozMzI4NzY=',
    label: 'Vinguide',
    uri: null,
    parentId: null,
    childItems: {
      nodes: [
        {
          id: 'cG9zdDo0MjU3OTA=',
          label: 'Rött Vin',
          uri: '/drycker/rott-vin/',
        },
        {
          id: 'cG9zdDo0MjU3OTE=',
          label: 'Vitt Vin',
          uri: '/drycker/vitt-vin/',
        },
        {
          id: 'cG9zdDo0MjU3OTI=',
          label: 'Rosé Vin',
          uri: '/drycker/rose-vin/',
        },
        {
          id: 'cG9zdDo0MjU3OTM=',
          label: 'Dessert Vin',
          uri: '/drycker/dessert-vin/',
        },
        {
          id: 'cG9zdDo0MjU3OTQ=',
          label: 'Mousserande Vin',
          uri: '/drycker/mousserande-vin/',
        },
        {
          id: 'cG9zdDo0MjU3OTU=',
          label: 'Övrigt Vin',
          uri: '/drycker/ovrigt-vin/',
        },
      ],
    },
  },
];

export const footerMenu = [
  {
    id: 'cG9zdDozNDQ4NQ==',
    label: 'Om Oss',
    uri: '/om-oss/',
  },
  {
    id: 'cG9zdDozNDQ4Ng==',
    label: 'Annonsera',
    uri: '/annonsera/',
  },
  {
    id: 'cG9zdDozNDQ4Nw==',
    label: 'Kontakt',
    uri: '/kontakt/',
  },
  {
    id: 'cG9zdDozNDQ4OA==',
    label: 'Sitemap',
    uri: '/sitemap/',
  },
  {
    id: 'cG9zdDozNDQ4OQ==',
    label: 'Vinregioner',
    uri: '/regioner/',
  },
  {
    id: 'cG9zdDozNDQ5MA==',
    label: 'Vinproducenter',
    uri: '/producenter/',
  },
];
