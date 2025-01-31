'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getVinguideData(uri) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinguidePosts($uri: ID!) {
          landing(id: $uri, idType: URI) {
            id
            title
            slug
            landingId
            content
            uri
            children(first: 100) {
              nodes {
                ... on Landing {
                  id
                  slug
                  title
                  produktslander {
                    nodes {
                      flag {
                        flagImage {
                          node {
                            altText
                            sourceUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
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
            faq {
              faq {
                faqAnswer
                faqQuestion
              }
            }
            vinguideProducts {
              vinguideproduct(first: 1000) {
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
                      salePrice
                      bottlePackageVolume
                      containerType
                      wineSortiment
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
                }
              }
            }
            vinguidePosts {
              shortTitle
              shortDescription
              pageTitle
              pageSubtitle
              fieldGroupName
              allProductTitle
              vinguidePosts {
                nodes {
                  contentTypeName
                  date
                  id
                  slug
                  ... on Post {
                    id
                    excerpt
                    featuredImage {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    author {
                      node {
                        name
                        id
                      }
                    }
                    date
                    categories {
                      nodes {
                        name
                        slug
                        categoriesImagesAndOtherFields {
                          categorycolorpicker
                        }
                      }
                    }
                    title
                  }
                }
              }
            }
          }
        }
      `,
      variables: { uri },
    });

    return data?.landing;
  } catch (error) {
    console.error('Error fetching vinguide posts:', error);
    return null;
  }
}

export async function getProductByLander(slug, type) {
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
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;
  try {
    let cursor = null;
    let allProducts = [];
    let nextPage = true;

    while (nextPage) {
      const { data } = await client.query({
        query,
        variables: {
          slug,
          cursor,
        },
      });
      const { nodes, pageInfo } = data.produktLand.produkter;
      allProducts.push(...nodes);
      cursor = pageInfo?.endCursor;
      nextPage = pageInfo?.hasNextPage;
    }
    const filteredProducts = allProducts.filter((product) =>
      product.produktTyper.nodes.some((node) => node.slug === type)
    );
    return filteredProducts;
  } catch (error) {
    console.error(`Error fetching product`, error);
    return { error, data: null };
  }
}

export async function getProduktsLanderSlug(title) {
  try {
    const { data } = await client.query({
      query: gql`
        query GetProduktsLanderSlug($title: [String]) {
          produktslander(where: { name: $title }) {
            nodes {
              slug
            }
          }
        }
      `,
      variables: { title },
    });
    return data?.produktslander?.nodes[0]?.slug;
  } catch (error) {
    console.error('Error fetching produktsLander slug:', error);
    return null;
  }
}
