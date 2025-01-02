'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countImportors(cursor = null, allImportors = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountImportors($cursor: String) {
          vinimporterer(first: 100, after: $cursor) {
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

    const newImportors = data.vinimporterer.nodes;
    const updatedImportors = [...allImportors, ...newImportors];

    if (data.vinimporterer.pageInfo.hasNextPage) {
      return countImportors(data.vinimporterer.pageInfo.endCursor, updatedImportors);
    }

    return updatedImportors.length;
  } catch (error) {
    console.error('Error fetching Importors', error);
    return allImportors.length;
  }
}

export async function getAllVinimportorer(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinimportorer($first: Int, $last: Int, $after: String, $before: String) {
          vinimporterer(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              title
              uri
              slug
              content
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

    return { importors: data?.vinimporterer?.nodes, pageInfo: data?.vinimporterer?.pageInfo };
  } catch (error) {
    console.error('Error fetching vinimportor:', error);
    return [];
  }
}
export async function getVinimporterBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query VinimporterBySlug($slug: String!) {
          vinimporterBy(slug: $slug) {
            date
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
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
            importerFields {
              vineImporterEmail
              importerWebsite

              productsVinimporter {
                nodes {
                  ... on Produkt {
                    id
                    title
                    slug
                    featuredImage {
                      node {
                        sourceUrl
                        altText
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
    return data.vinimporterBy;
  } catch (error) {
    console.error('Error fetching vinimporter:', error);
    return null;
  }
}
