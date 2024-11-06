import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllOrdlista() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilista {
          ordlistaCategories {
            nodes {
              name
              ordlista {
                nodes {
                  title
                  uri
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
