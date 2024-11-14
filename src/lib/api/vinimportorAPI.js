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
