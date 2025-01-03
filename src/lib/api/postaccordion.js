import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllCategoriesWithSuggestedPosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllCategoriesWithSuggestedPosts {
          categories {
            nodes {
              id
              name
              slug
              categorySuggestedPosts {
                selectSuggestedPosts {
                  edges {
                    node {
                      id
                      ... on Post {
                        id
                        title
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories with suggested posts:', error);
    return [];
  }
}

export async function getCategoryWithSuggestedPosts(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query CategoryWithSuggestedPosts($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            categoryId
            name
            categorySuggestedPosts {
              selectSuggestedPosts {
                edges {
                  node {
                    id
                    ... on Post {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.category;
  } catch (error) {
    console.error('Error fetching category with suggested posts:', error);
    return null;
  }
}
