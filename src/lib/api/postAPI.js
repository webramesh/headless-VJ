// post api
'use server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getHomePagePosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPosts {
          posts(first: 4) {
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
          }
        }
      `,
    });

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
export async function getPostBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            content
            date
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            author {
              node {
                name
                customAvatar
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllCategories {
          categories {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
    });

    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCategoryBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query CategoryBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            name
            description
          }
        }
      `,
      variables: { slug },
    });

    return data.category;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

export async function countTotalPostsByCategory(category, cursor = null, allPosts = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query countTotalPostsByCategory($category: String, $cursor: String) {
          posts(where: { categoryName: $category }, first: 100, after: $cursor) {
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
      variables: { category, cursor },
    });

    const newPosts = data.posts.nodes;
    const updatedPosts = [...allPosts, ...newPosts];

    if (data.posts.pageInfo.hasNextPage) {
      return countTotalPostsByCategory(category, data.posts.pageInfo.endCursor, updatedPosts);
    }

    return updatedPosts.length;
  } catch (error) {
    console.error('Error fetching regioners', error);
    return allPosts.length;
  }
}

export async function getPostsByCategory(category, first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostsByCategory($category: String!, $first: Int, $last: Int, $after: String, $before: String) {
          posts(where: { categoryName: $category }, first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              title
              slug
              excerpt
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  slug
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
        }
      `,
      variables: { category, first, last, after, before },
    });

    return { posts: data.posts.nodes, pageInfo: data.posts.pageInfo };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}
