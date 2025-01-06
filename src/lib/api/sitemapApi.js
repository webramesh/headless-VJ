'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

async function fetchAllItems(queryName, query) {
  let allItems = [];
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
    try {
      const { data } = await client.query({
        query: gql`
          query FetchItems($first: Int!, $after: String) {
            ${query}
          }
        `,
        variables: {
          first: 1000,
          after: endCursor,
        },
      });

      allItems = [...allItems, ...data[queryName].nodes];
      hasNextPage = data[queryName].pageInfo.hasNextPage;
      endCursor = data[queryName].pageInfo.endCursor;
    } catch (error) {
      console.error(`Error fetching ${queryName} for sitemap:`, error);
      throw error;
    }
  }

  return allItems;
}

export async function getAllPages() {
  return fetchAllItems(
    'pages',
    `
    pages(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllOrdlistaPages() {
  return fetchAllItems(
    'ordlista',
    `
    ordlista(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllNyheterPages() {
  return fetchAllItems(
    'nyheter',
    `
    nyheter(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllPosts() {
  return fetchAllItems(
    'posts',
    `
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllProducenter() {
  return fetchAllItems(
    'producenter',
    `
    producenter(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllRegioner() {
  return fetchAllItems(
    'regioner',
    `
    regioner(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllVinguide() {
  return fetchAllItems(
    'vinguide',
    `
    vinguide(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllVinimporterer() {
  return fetchAllItems(
    'vinimporterer',
    `
    vinimporterer(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}

export async function getAllProdukter() {
  return fetchAllItems(
    'produkter',
    `
    produkter(first: $first, after: $after) {
      nodes {
        id
        title
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  `
  );
}
