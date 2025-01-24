'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countNyheter(cursor = null, allNyheter = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountNyheter($cursor: String) {
          nyheter(first: 1000, after: $cursor) {
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

    const newNyheter = data.nyheter.nodes;
    const updatedNyheter = [...allNyheter, ...newNyheter];

    if (data.nyheter.pageInfo.hasNextPage) {
      return countNyheter(data.nyheter.pageInfo.endCursor, updatedNyheter);
    }

    return updatedNyheter.length;
  } catch (error) {
    console.error('Error fetching nyheter', error);
    return allNyheter.length;
  }
}

export async function getAllNyheter() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllNyheter {
          nyheter {
            nodes {
              id
              title
              slug
              date
              excerpt
              author {
                node {
                  name
                }
              }
            }
          }
        }
      `,
    });

    return data.nyheter.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getAllNyheterBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query NyheterBySlug($slug: ID!) {
          nyhet(id: $slug, idType: SLUG) {
            id
            title
            content
            slug
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
          }
        }
      `,
      variables: { slug },
    });

    return data.nyhet;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllNyheterPaginated(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllNyheterPaginated($first: Int, $last: Int, $after: String, $before: String) {
          nyheter(first: $first, last: $last, after: $after, before: $before) {
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
              slug
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

    return { nyheter: data?.nyheter?.nodes, pageInfo: data?.nyheter?.pageInfo };
  } catch (error) {
    console.error('Error fetching nyheter:', error);
    return { nyheter: [], pageInfo: null };
  }
}

export async function getNyheterByURL(url) {
  try {
    const { data } = await client.query({
      query: gql`
        query NyheterByURL($url: String!) {
          nyhetBy(uri: $url) {
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
            title
            date
            author {
              node {
                name
              }
            }
          }
        }
      `,
      variables: { url },
    });

    return data.nyhetBy;
  } catch (error) {
    console.error('Error fetching nyhet:', error);
    return null;
  }
}
