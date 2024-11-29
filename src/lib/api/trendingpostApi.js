import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllTrendingPosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllTrendingPosts {
          popularPosts(first: 6) {
            id
            title
            visitCount
            excerpt
            date
            slug
            categories {
              nodes {
                name
                slug
                categoriesImagesAndOtherFields {
                  categorycolorpicker
                }
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      `,
    });

    return data.popularPosts || [];
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    return [];
  }
}

export async function getAllTrendingPostsBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query TrendingPostsBySlug($slug: ID!) {
          trend(id: $slug, idType: SLUG) {
            id
            title
            content
            date
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.trend;
  } catch (error) {
    console.error('Error fetching trending post:', error);
    return null;
  }
}
