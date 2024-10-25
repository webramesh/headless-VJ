// post api
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
console.log(process.env.SITE_URL_ENDPOINT, 'from post')
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

export async function getPopularPosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query PopularPosts {
          popularPosts(first: 6) {
            id
            title
            date
            visitCount
            slug
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            excerpt
          }
        }
      `,
    });

    return data.popularPosts;
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}
