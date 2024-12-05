import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getProductsByType(slug) {
  const query = gql`
    query GetProductsByType($slug: ID!) {
      produktTyp(id: $slug, idType: SLUG) {
        name
        count
        produkter(first: 15) {
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
          }
        }
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
      variables: {
        slug,
      },
    });
    return {
      name: data.produktTyp.name,
      totalProducts: data.produktTyp.count,
      products: data.produktTyp.produkter.nodes,
    };
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}

export async function getAllProductsByType(slug, cursor = null, AllProducts = []) {
  const query = gql`
    query GetProductsByType($slug: ID!, $cursor: String) {
      produktTyp(id: $slug, idType: SLUG) {
        produkter(first: 1000, after: $cursor) {
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
              bottlePackageVolume
              containerType
              wineSortiment
              sustainable
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
                parent {
                  node {
                    name
                  }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
      variables: {
        slug,
        cursor,
      },
    });
    const newProducts = data.produktTyp.produkter.nodes;
    const updatedProducts = [...AllProducts, ...newProducts];
    if (data.produktTyp.produkter.pageInfo.hasNextPage) {
      return getAllProductsByType(slug, data.produktTyp.produkter.pageInfo.endCursor, updatedProducts);
    }
    return updatedProducts;
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}
