'use server';

import { gql } from '@apollo/client';

const { getClient } = require('./apolloclient');

const client = getClient();

const slugToTaxonomy = {
  tag: 'tag',
  smell: 'arom',
  color: 'farger',
  food: 'matkombination',
  'produkt-typer': 'produktTyp',
  'produkt-land': 'produktLand',
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

export async function countProductsByTaxonomy(category, slug) {
  const taxonomy = slugToTaxonomy[category];
  try {
    const { data } = await client.query({
      query: gql`
        query GetTaxonomyBySlug($slug: ID!) {
          ${taxonomy}(id: $slug, idType: SLUG) {
            name
            count
          }
        }
      `,
      variables: { category, slug },
    });
    return { name: data[taxonomy].name, totalProducts: data[taxonomy].count };
  } catch (error) {
    console.error('Error fetching products', error);
  }
}

export async function getTaxonomyBySlug(category, slug, first, last, after, before) {
  const taxonomy = slugToTaxonomy[category];
  const query = gql`
    query GetTaxonomyBySlug($slug: ID!,$first: Int, $last: Int, $after: String, $before: String) {
      ${taxonomy}(id: $slug, idType: SLUG) {
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
              productLabels{
                bestSeller
                familyWinery
                featuredWine
                newWine
                onlineWine
                organicWine
                sustainable
                veganWine
                verifiedByVjse
                visitWinery
              }
              pice
            }
            produktTyper {
                nodes {
                  slug
                  name
                  parent {
                    node {
                      name
                    }
                  }
                }
              }
            produktslander {
              nodes {
                name
                flag {
                  flagImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
                parent {
                  node {
                    name
                  }
                }
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
      products: data[taxonomy]?.produkter?.nodes,
      pageInfo: data[taxonomy]?.produkter?.pageInfo,
    };
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return null;
  }
}
export async function getTaxonomySEO(category, slug) {
  const taxonomy = slugToTaxonomy[category];

  const query = gql`
    query GetTaxonomyBySlug($slug: ID!) {
      ${taxonomy}(id: $slug, idType: SLUG) {
        seo {
          title
          robots
          description
          focusKeywords
          canonicalUrl
          openGraph {
            locale
            type
            title
            description
            url
            siteName
            image {
              height
              secureUrl
              type
              url
              width
            }
            twitterMeta {
              card
              description
              image
              creator
              title
              site
            }
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
      },
    });

    return {
      // products: data[taxonomy]?.produkter?.nodes,
      seo: data[taxonomy]?.seo,
    };
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return null;
  }
}
