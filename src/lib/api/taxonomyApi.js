'use server';

import { gql } from '@apollo/client';

const { getClient } = require('./apolloclient');

const client = getClient();

const slugToTaxonomy = {
  tag: 'tag',
  smell: 'arom',
  color: 'farger',
  food: 'matkombination',
  'produkt-typer': 'produktyp',
  taste: 'smak',
  grape: 'vinstock',
};

export async function getAllTaxonomyTypes() {
  try {
    const { data } = await client.query({
      query: gql`
        query GetAllTaxonomyTypes {
          taxonomies {
            nodes {
              name
              id
            }
          }
        }
      `,
    });
    return data.taxonomies.nodes;
  } catch (error) {
    console.error('Error fetching taxonomy types:', error);
    return [];
  }
}

export async function countProductsByTaxonomy(category, slug, cursor = null, allProducts = []) {
  const taxonomy = slugToTaxonomy[category];
  try {
    const { data } = await client.query({
      query: gql`
        query GetTaxonomyBySlug($slug: ID!,$cursor:String) {
          ${taxonomy}(id: $slug, idType: SLUG) {
            produkter(first: 100, after: $cursor) {
              nodes {
                id
              }
              pageInfo {
                endCursor
                hasNextPage 
              }
            }
          }
        }
      `,
      variables: { category, slug, cursor },
    });

    const newProducts = data[taxonomy].produkter.nodes;
    const updatedProducts = [...allProducts, ...newProducts];

    if (data[taxonomy].produkter.pageInfo.hasNextPage) {
      return countProductsByTaxonomy(category, slug, data[taxonomy].produkter.pageInfo.endCursor, updatedProducts);
    }

    return updatedProducts.length;
  } catch (error) {
    console.error('Error fetching products', error);
    return allProducts.length;
  }
}

export async function getTaxonomyBySlug(category, slug, first, last, after, before) {
  const taxonomy = slugToTaxonomy[category];
  const query = gql`
    query GetTaxonomyBySlug($slug: ID!,$first: Int, $last: Int, $after: String, $before: String) {
      ${taxonomy}(id: $slug, idType: SLUG) {
        name
        produkter(first: $first, last: $last, after: $after, before: $before) {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            fieldsProduct {
              productLabels
              pice
            }
            produktrekommendationer {
              nodes {
                name
                slug
              }
            }
            produktslander {
              nodes {
                name
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            startCursor
            hasPreviousPage
          }
        }
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
      variables: {
        category,
        slug,
        first,
        last,
        after,
        before,
      },
    });
    return {
      taxonomy: data[taxonomy],
      products: data[taxonomy]?.produkter?.nodes,
      pageInfo: data[taxonomy]?.produkter?.pageInfo,
    };
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return null;
  }
}
