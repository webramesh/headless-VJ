import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllVinguidePosts(name) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinguidePosts($name: String!) {
          vinguide(where: { title: $name }) {
            nodes {
              id
              title
              slug
              landingId
              vinguidePosts {
                vinguidePosts {
                  nodes {
                    contentTypeName
                    date
                    id
                    slug
                    ... on Post {
                      id
                      excerpt
                      featuredImage {
                        node {
                          altText
                          sourceUrl
                        }
                      }
                      author {
                        node {
                          name
                          id
                        }
                      }
                      date
                      categories {
                        nodes {
                          name
                          slug
                          categoriesImagesAndOtherFields {
                            categorycolorpicker
                          }
                        }
                      }
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { name },
    });

    return data.vinguide.nodes || [];
  } catch (error) {
    console.error('Error fetching vinguide posts:', error);
    return [];
  }
}

export async function getVinguidePostBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query VinguidePostBySlug($slug: ID!) {
          vinguide(id: $slug, idType: SLUG) {
            id
            title
            slug
            landingId
            vinguidePosts {
              vinguidePosts {
                nodes {
                  contentTypeName
                  date
                  id
                  slug
                  ... on Post {
                    id
                    excerpt
                    content
                    featuredImage {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    author {
                      node {
                        name
                        id
                      }
                    }
                    date
                    categories {
                      nodes {
                        name
                        slug
                        categoriesImagesAndOtherFields {
                          categorycolorpicker
                        }
                      }
                    }
                    title
                  }
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.vinguide;
  } catch (error) {
    console.error('Error fetching vinguide post:', error);
    return null;
  }
}
