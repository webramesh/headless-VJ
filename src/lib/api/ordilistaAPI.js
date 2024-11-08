'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getAllOrdlistaCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilistaCategory {
          ordlistaCategories {
            nodes {
              name
              ordlista {
                nodes {
                  title
                  uri
                  slug
                }
              }
            }
          }
        }
      `,
    });

    return data.ordlistaCategories.nodes;
  } catch (error) {
    console.error('Error fetching odilista:', error);
    return [];
  }
}

export async function getAllOrdlista(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilista($first: Int, $last: Int, $after: String, $before: String) {
          ordlista(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              title
              uri
              slug
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              ordlistaCategories {
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

    return { allOrdlista: data.ordlista.nodes, pageInfo: data.ordlista.pageInfo };
  } catch (error) {
    console.error('Error fetching odilista:', error);
    return [];
  }
}

export async function getOrdlistaBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query OrdlistaBySlug($slug: String!) {
          ordlistaItemBy(slug: $slug) {
            date
            title
            content
          }
        }
      `,
      variables: { slug },
    });

    return data.ordlistaItemBy;
  } catch (error) {
    console.error('Error fetching ordlista by slug:', error);
    return null;
  }
}
