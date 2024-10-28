import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllProducenter() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducenter {
          producenter(first: 15) {
            nodes {
              id
              uri
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    });

    return data.producenter.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getProducentBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProducentBySlug($slug: String!) {
          producentBy(slug: $slug) {
            content
            title
          }
        }
      `,
      variables: { slug },
    });

    return data.producentBy;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
