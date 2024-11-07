import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllAuthors() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllAuthors {
          users {
            nodes {
              id
              name
              slug
              customAvatar
              description
              authorDescriptionInfo {
                userDescriptionInfo
              }
            }
          }
        }
      `,
    });

    return data.users.nodes;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export async function getAuthorBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query AuthorBySlug($slug: ID!) {
          user(id: $slug, idType: SLUG) {
            id
            name
            slug
            customAvatar
            description
            authorDescriptionInfo {
              userDescriptionInfo
            }
            posts(first: 9) {
              nodes {
                id
                title
                content
                date
                slug
                excerpt
                categories {
                  nodes {
                    name
                    slug
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
          }
        }
      `,
      variables: { slug },
    });
    return data.user;
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}
