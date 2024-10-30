import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllRegions() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllRegions {
          regioner(first: 15) {
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
      `,
    });

    return data.regioner.nodes;
  } catch (error) {
    console.error('Error fetching regions:', error);
    return [];
  }
}
