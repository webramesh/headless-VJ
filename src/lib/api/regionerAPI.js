'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();
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
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
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
