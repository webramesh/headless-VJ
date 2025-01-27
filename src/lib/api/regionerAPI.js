'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countRegioners(cursor = null, allRegioners = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountRegioners($cursor: String) {
          regioner(first: 1000, after: $cursor) {
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

    const newRegioners = data.regioner.nodes;
    const updatedRegioners = [...allRegioners, ...newRegioners];

    if (data.regioner.pageInfo.hasNextPage) {
      return countRegioners(data.regioner.pageInfo.endCursor, updatedRegioners);
    }

    return updatedRegioners.length;
  } catch (error) {
    console.error('Error fetching regioners', error);
    return allRegioners.length;
  }
}

export async function getAllRegions(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllRegions($first: Int, $last: Int, $after: String, $before: String) {
          regioner(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              excerpt
              title
              slug
              id
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              lander {
                nodes {
                  slug
                  name
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

    return { regions: data?.regioner?.nodes, pageInfo: data?.regioner?.pageInfo };
  } catch (error) {
    console.error('Error fetching regions:', error);
    return [];
  }
}

export async function getRegionByURL(url) {
  try {
    const { data } = await client.query({
      query: gql`
        query RegionByURL($url: String!) {
          regionBy(uri: $url) {
            title
            faq {
              faq {
                faqQuestion
                faqAnswer
              }
            }
            featuredImage {
              node {
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
          }
        }
      `,
      variables: { url },
    });

    return data.regionBy;
  } catch (error) {
    console.error('Error fetching region:', error);
    return null;
  }
}
