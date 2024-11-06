import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getLandBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query LandBySlug($slug: ID!) {
          land(id: $slug, idType: SLUG) {
            name
            slug
            description
            regioner {
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
        }
      `,
      variables: { slug },
    });

    return data.land;
  } catch (error) {
    console.error('Error fetching land:', error);
    return null;
  }
}
