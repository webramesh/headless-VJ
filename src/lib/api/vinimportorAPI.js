import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllVinimportorer() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinimportorer {
          vinimporterer {
            nodes {
              title
              uri
              slug
            }
          }
        }
      `,
    });

    return data.vinimporterer.nodes;
  } catch (error) {
    console.error('Error fetching vinimportor:', error);
    return [];
  }
}
