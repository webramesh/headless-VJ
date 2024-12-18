'use server';
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

export async function getProductByCountry(slug, type, cursor = null, AllProducts = []) {
  const query = gql`
    query GetProductByCountry($slug: ID!, $cursor: String) {
      produktLand(id: $slug, idType: SLUG) {
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
    const newProducts = data?.produktLand?.produkter?.nodes;
    const updatedProducts = [...AllProducts, ...newProducts];
    if (data?.produktLand?.produkter?.pageInfo?.hasNextPage) {
      return getProductByCountry(slug, type, data?.produktLand?.produkter?.pageInfo?.endCursor, updatedProducts);
    }

    const filteredProducts = updatedProducts.filter((product) =>
      product.produktTyper.nodes.some((node) => node.slug === type)
    );
    return filteredProducts;
  } catch (error) {
    console.error(`Error fetching product`, error);
    return null;
  }
}

export const getRegionsByCountry = async (id) => {
  const query = gql`
    query GetProductByCountry($id: Int!) {
      produktslander(first: 1000, where: { parent: $id }) {
        nodes {
          name
          slug
        }
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
      variables: {
        id,
      },
    });
    return data?.produktslander?.nodes;
  } catch (error) {
    console.error(`Error fetching regions`, error);
    return null;
  }
};

export const getNameAndIdBySlug = async (slug) => {
  const query = gql`
    query GetNameBySlug($slug: ID!) {
      produktLand(id: $slug, idType: SLUG) {
        termTaxonomyId
        name
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
    return { name: data?.produktLand?.name, id: data?.produktLand?.termTaxonomyId };
  } catch (error) {
    console.error(`Error fetching name and id`, error);
    return null;
  }
};
