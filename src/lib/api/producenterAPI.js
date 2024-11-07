'use server';

import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

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
        query ProducentBySlug($slug: String!) {
          producentBy(slug: $slug) {
            content
            title
          }
        }
      `,
      variables: { slug },
    });

    return data.producentBy;
  } catch (error) {
    console.error('Error fetching producent:', error);
    return null;
  }
}
