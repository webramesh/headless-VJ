import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllNyheter() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllNyheter {
          nyheter(first: 10) {
            nodes {
              id
              title
              slug
              date
              excerpt
              author {
                node {
                  name
                }
              }
            }
          }
        }
      `,
    });

    return data.nyheter.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getAllNyheterBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query NyheterBySlug($slug: ID!) {
          nyhet(id: $slug, idType: SLUG) {
            id
            title
            content
            slug
            seo {
              title
              robots
              description
              focusKeywords
              canonicalUrl
              openGraph {
                locale
                type
                title
                description
                url
                siteName
                image {
                  height
                  secureUrl
                  type
                  url
                  width
                }
                twitterMeta {
                  card
                  description
                  image
                  creator
                  title
                  site
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.nyhet;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
