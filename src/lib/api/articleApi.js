'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countArticles(cursor = null, allArticles = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountArticles($cursor: String) {
          posts(first: 100, after: $cursor) {
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

    const newArticles = data.posts.nodes;
    const updatedArticles = [...allArticles, ...newArticles];

    if (data.posts.pageInfo.hasNextPage) {
      return countArticles(data.posts.pageInfo.endCursor, updatedArticles);
    }

    return updatedArticles.length;
  } catch (error) {
    console.error('Error fetching articles', error);
    return allArticles.length;
  }
}

export async function getAllArticles(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllArticles($first: Int, $last: Int, $after: String, $before: String) {
          posts(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              author {
                node {
                  name
                }
              }
              date
              title
              excerpt
              modified
              id
              categories {
                nodes {
                  name
                  slug
                  categoriesImagesAndOtherFields {
                    categorycolorpicker
                  }
                }
              }
              slug
              visitCount
              featuredImage {
                node {
                  mediaItemUrl
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

    return { posts: data?.posts?.nodes, pageInfo: data?.posts?.pageInfo };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
