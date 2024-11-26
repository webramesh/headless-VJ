'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countProducts(cursor = null, allProducts = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountProducts($cursor: String) {
          produkter(first: 100, after: $cursor) {
            nodes {
              id
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      variables: { cursor },
    });

    const newProducts = data.produkter.nodes;
    const updatedProducts = [...allProducts, ...newProducts];

    if (data.produkter.pageInfo.hasNextPage) {
      return countProducts(data.produkter.pageInfo.endCursor, updatedProducts);
    }

    return updatedProducts.length;
  } catch (error) {
    console.error('Error fetching products', error);
    return allProducts.length;
  }
}

export async function getAllProducts(first = 15, last = 0, after = null, before = null) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducts($first: Int, $last: Int, $after: String, $before: String) {
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
              produktTyper {
                nodes {
                  slug
                  name
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
      `,
      variables: { first, last, after, before },
    });
    return {
      products: data?.produkter?.nodes || [],
      pageInfo: data?.produkter?.pageInfo || {},
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], pageInfo: {} };
  }
}

export async function getProductBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProductBySlug($slug: String!) {
          produktBy(slug: $slug) {
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            produktTyper {
              nodes {
                slug
                name
              }
            }
            produktslander {
              nodes {
                name
                slug
              }
            }
            fieldsProduct {
              composition
              productShortText
              extraReadMore1
              extraReadMore2
              pice
              pricePerLitter
              productCode
              buyLink
              wineSortiment
              alcohol
              vintage
              bottlePackageVolume
              allergener
              tasteClock1FyllighetSotma
              tasteClock2Fyllighetstravhet
              tasteClock3Fruktsyra
              caloriesInAlcPer15cl
              caloriesInAlcPerContainerVolume
              caloriesInAlcPerLitter
              caloriesInSugarPer15cl
              caloriesInSugarPerContainerVolume
              caloriesInSugarPerLitter
              totalCaloriesPer15Cl
              totalCaloriesPerContainerVolume
              totalCaloriesPerLitter
              sugerLevel
              sugarLevelIn1Litter
              containerType
              produktPackaging
              productLabels
            }

            matkombinationer {
              nodes {
                name
                categoriesImagesAndOtherFields {
                  categoriesImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
            smakar {
              nodes {
                name
                slug
              }
            }
            aromer {
              nodes {
                name
                slug
              }
            }
            fargers {
              nodes {
                name
                slug
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.produktBy;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
