'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countLanders(cursor = null, allLanders = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountLanders($cursor: String) {
          lander(first: 1000, after: $cursor) {
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

    const newLanders = data.lander.nodes;
    const updatedLanders = [...allLanders, ...newLanders];

    if (data.lander.pageInfo.hasNextPage) {
      return countLanders(data.lander.pageInfo.endCursor, updatedLanders);
    }

    return updatedLanders.length;
  } catch (error) {
    console.error('Error fetching landers', error);
    return allLanders.length;
  }
}

export async function getAllLanders(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllLanders($first: Int, $last: Int, $after: String, $before: String) {
          lander(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              slug
              name
              description
              count
              categoriesImagesAndOtherFields {
                categoriesImage {
                  node {
                    sourceUrl
                    altText
                  }
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

    return { landers: data?.lander?.nodes, pageInfo: data?.lander?.pageInfo };
  } catch (error) {
    console.error('Error fetching landers:', error);
    return [];
  }
}

export async function getLandBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query LandBySlug($slug: ID!) {
          land(id: $slug, idType: SLUG) {
            name
            slug
            description
            seo {
              title
              robots
              description
              focusKeywords
              canonicalUrl
              jsonLd {
                raw
              }
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
            regioner {
              nodes {
                excerpt
                title
                slug
                id
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                lander {
                  nodes {
                    slug
                    name
                  }
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.land;
  } catch (error) {
    console.error('Error fetching land:', error);
    return null;
  }
}
