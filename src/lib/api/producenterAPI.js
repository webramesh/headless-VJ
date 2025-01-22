'use server';

import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countProducenters(cursor = null, allProducenters = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountProducenters($cursor: String) {
          producenter(first: 1000, after: $cursor) {
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

    const newProducenters = data.producenter.nodes;
    const updatedProducenters = [...allProducenters, ...newProducenters];

    if (data.producenter.pageInfo.hasNextPage) {
      return countProducenters(data.producenter.pageInfo.endCursor, updatedProducenters);
    }

    return updatedProducenters.length;
  } catch (error) {
    console.error('Error fetching producenters', error);
    return allProducenters.length;
  }
}

export async function getAllProducenter(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducenter($first: Int, $last: Int, $after: String, $before: String) {
          producenter(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              uri
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
      `,
      variables: { first, last, after, before },
    });
    return {
      producenters: data?.producenter?.nodes || [],
      pageInfo: data?.producenter?.pageInfo || {},
    };
  } catch (error) {
    console.error('Error fetching producents:', error);
    return [];
  }
}

export async function getProducentBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProducentBySlug($slug: ID!) {
          producent(id: $slug, idType: SLUG) {
            id
            slug
            title
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            producenterFields {
              producenterWebsite
              producerAddress
              products {
                nodes {
                  ... on Produkt {
                    id
                    title
                    slug
                    featuredImage {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    fieldsProduct {
                      pice
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
                    }
                    produktTyper {
                      nodes {
                        name
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
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.producent;
  } catch (error) {
    console.error('Error fetching producent:', error);
    return null;
  }
}

export async function getAllProducenterWithProducts(cursor = null, allProducenters = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducenterWithProducts($cursor: String) {
          producenter(first: 100, after: $cursor) {
            nodes {
              id
              slug
              title
              producenterFields {
                products {
                  nodes {
                    ... on Produkt {
                      id
                      title
                      slug
                      featuredImage {
                        node {
                          altText
                          sourceUrl
                        }
                      }
                      fieldsProduct {
                        pice
                        productLabels
                      }
                      produktTyper {
                        nodes {
                          name
                        }
                      }
                      produktslander {
                        nodes {
                          name
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
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      variables: { cursor },
    });

    const newProducenters = data.producenter.nodes;
    const updatedProducenters = [...allProducenters, ...newProducenters];

    if (data.producenter.pageInfo.hasNextPage) {
      return getAllProducenterWithProducts(data.producenter.pageInfo.endCursor, updatedProducenters);
    }

    return updatedProducenters;
  } catch (error) {
    console.error('Error fetching producenters with products', error);
    return allProducenters;
  }
}

export async function countLanderProducenters(slug, cursor = null, allProducenters = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostBySlug($slug: ID!, $cursor: String) {
          produktLand(id: $slug, idType: SLUG) {
            name
            description
            producenter(first: 1000, after: $cursor) {
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
      variables: { slug, cursor },
    });

    const newProducenters = data.produktLand.producenter.nodes;
    const updatedProducenters = [...allProducenters, ...newProducenters];

    if (data.produktLand.producenter.pageInfo.hasNextPage) {
      return countLanderProducenters(slug, data.produktLand.producenter.pageInfo.endCursor, updatedProducenters);
    }

    return { lander: data?.produktLand, totalProducenters: updatedProducenters.length };
  } catch (error) {
    console.error('Error fetching producenter', error);
    return allProducenters;
  }
}

export async function getProducenterByLand(slug, first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostBySlug($slug: ID!, $first: Int, $last: Int, $after: String, $before: String) {
          produktLand(id: $slug, idType: SLUG) {
            producenter(first: $first, last: $last, after: $after, before: $before) {
              nodes {
                id
                uri
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        }
      `,
      variables: { slug, first, last, after, before },
    });

    return { producenters: data?.produktLand?.producenter?.nodes, pageInfo: data?.produktLand?.producenter?.pageInfo };
  } catch (error) {
    console.error('Error fetching producenters with products', error);
    return [];
  }
}
