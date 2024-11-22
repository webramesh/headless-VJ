import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllBanners() {
  try {
    const { data } = await client.query({
      query: gql`
        query Banner {
          allBanner {
            nodes {
              bannerFields {
                bannerUrl
              }
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              bannerId
            }
          }
        }
      `,
      fetchPolicy: 'no-cache',
    });

    return data.allBanner.nodes;
  } catch (error) {
    console.error('Error fetching banners:', error);
    return [];
  }
}
