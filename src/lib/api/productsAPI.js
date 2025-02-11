'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countProducts(cursor = null, allProducts = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountProducts($cursor: String) {
          produkter(first: 1000, after: $cursor) {
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
                pice
                salePrice
                productLabels {
                  bestSeller
                  familyWinery
                  featuredWine
                  newWine
                  onlineWine
                  organicWine
                  veganWine
                  verifiedByVjse
                  visitWinery
                }
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
                  slug
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

export async function getProductBySlug(identifier) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProductBySlug($slug: String) {
          produktBy(slug: $slug) {
            id
            title
            slug
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
            featuredImage {
              node {
                sourceUrl
              }
            }
            produktTyper {
              nodes {
                name
                slug
                categoriesImagesAndOtherFields {
                  categorycolorpicker
                }
                parent {
                  node {
                    name
                  }
                }
              }
            }
            wineStyles {
              nodes {
                categoriesImagesAndOtherFields {
                  categorycolorpicker
                }
                name
              }
            }

            produktslander {
              nodes {
                name
                slug
                parent {
                  node {
                    name
                  }
                }
                flag {
                  flagImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
            fieldsProduct {
              closure
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
              sugarBites
              containerType
              produktPackaging
              wineSaleStartDate
              alcoholPerSek
              salePrice
              salesByYears {
                yearHistory
                horozontalVolumeHistory
              }
              priceHistory {
                price
                priceHistoryDate
              }
              productLabels {
                bestSeller
                familyWinery
                featuredWine
                newWine
                onlineWine
                organicWine
                veganWine
                verifiedByVjse
                visitWinery
                sustainable
              }

              vinimporter {
                nodes {
                  ... on Vinimporter {
                    id
                    title
                    slug
                    content
                  }
                }
              }
              produkterproducer {
                nodes {
                  ... on Producent {
                    id
                    title
                    slug
                    content
                  }
                }
              }
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
          }
        }
      `,
      variables: {
        slug: identifier ? identifier : null,
      },
    });

    return {
      product: data.produktBy,
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      product: null,
    };
  }
}

export async function getSimilarProducts(uri) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinguidePosts($uri: ID!) {
          landing(id: $uri, idType: URI) {
            vinguideProducts {
              vinguideproduct(first: 6) {
                nodes {
                  ... on Produkt {
                    id
                    title
                    slug
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    fieldsProduct {
                      productLabels {
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
                      bottlePackageVolume
                      containerType
                      wineSortiment
                    }
                    produktslander {
                      nodes {
                        name
                        slug
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
                  }
                }
              }
            }
          }
        }
      `,
      variables: { uri },
    });

    return data?.landing || [];
  } catch (error) {
    console.error('Error fetching vinguide posts:', error);
    return [];
  }
}

export async function getProductSlider(id) {
  try {
    const { data } = await client.query({
      query: gql`
        query PageById($id: ID!) {
          page(id: $id) {
            id
            productSlider {
              productSlider {
                nodes {
                  slug
                  ... on Produkt {
                    id
                    title
                    slug
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    produktTyper {
                      nodes {
                        name
                        slug
                        categoriesImagesAndOtherFields {
                          categorycolorpicker
                        }
                        parent {
                          node {
                            name
                          }
                        }
                      }
                    }
                    wineStyles {
                      nodes {
                        categoriesImagesAndOtherFields {
                          categorycolorpicker
                        }
                        name
                      }
                    }

                    produktslander {
                      nodes {
                        name
                        slug
                        parent {
                          node {
                            name
                          }
                        }
                        flag {
                          flagImage {
                            node {
                              sourceUrl
                            }
                          }
                        }
                      }
                    }
                    fieldsProduct {
                      composition
                      productShortText
                      pice
                      productCode
                      buyLink
                      wineSortiment
                      alcohol
                      vintage
                      bottlePackageVolume
                      tasteClock1FyllighetSotma
                      tasteClock2Fyllighetstravhet
                      tasteClock3Fruktsyra
                      salePrice

                      productLabels {
                        bestSeller
                        familyWinery
                        featuredWine
                        newWine
                        onlineWine
                        organicWine
                        veganWine
                        verifiedByVjse
                        visitWinery
                        sustainable
                      }

                      produkterproducer {
                        nodes {
                          ... on Producent {
                            id
                            title
                            slug
                          }
                        }
                      }
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
                  }
                }
              }
            }
          }
        }
      `,
      variables: { id },
    });

    return data.page;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
