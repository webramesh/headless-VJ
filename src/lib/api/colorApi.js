import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllColors() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllColors {
          fargers {
            nodes {
              id
              name
              slug
              produkter(first: 12) {
                nodes {
                  id
                  title
                  slug
                  featuredImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                  fieldsProduct {
                    productLabels
                    pice
                  }
                  produktrekommendationer {
                    nodes {
                      name
                      slug
                    }
                  }
                  produktslander {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    return data.fargers.nodes;
  } catch (error) {
    console.error('Error fetching colors:', error);
    return [];
  }
}

export async function getColorBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query ColorBySlug($slug: ID!) {
          farger(id: $slug, idType: SLUG) {
            id
            name
            slug
            produkter(first: 12) {
              nodes {
                id
                title
                slug
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                fieldsProduct {
                  productLabels
                  pice
                }
                produktrekommendationer {
                  nodes {
                    name
                    slug
                  }
                }
                produktslander {
                  nodes {
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

    return data.farger;
  } catch (error) {
    console.error('Error fetching color:', error);
    return null;
  }
}
