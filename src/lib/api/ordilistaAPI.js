import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

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

export async function getAllOrdlista() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilista {
          ordlista(first: 12) {
            nodes {
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
          }
        }
      `,
    });

    return data.ordlista.nodes;
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
