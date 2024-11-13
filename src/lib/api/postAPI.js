// post api
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getHomePagePosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPosts {
          posts(first: 4) {
            nodes {
              author {
                node {
                  name
                }
              }
              date
              title
              excerpt
              modified
              id
              categories {
                nodes {
                  name
                  slug
                }
              }
              slug
              visitCount
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      `,
    });

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
export async function getPostBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title
            content
            date
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
            author {
              node {
                name
                customAvatar
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostProductRecommendationBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query GetPostProductRecommendationBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            title

            produktrekommendationer {
              nodes {
                name
                slug
                produkter {
                  nodes {
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    fieldsProduct {
                      pice
                      productCode
                      wineSortiment
                      alcohol
                      vintage
                      composition
                      bottlePackageVolume
                      allergener
                      tasteClock1FyllighetSotma
                      tasteClock2Fyllighetstravhet
                      tasteClock3Fruktsyra
                      caloriesInAlcPer15cl
                      caloriesInAlcPerContainerVolume
                      caloriesInAlcPerLitter
                      caloriesInSugarPer15cl
                      caloriesInSugarPerContainerVolume
                      caloriesInSugarPerLitter
                      totalCaloriesPer15Cl
                      totalCaloriesPerContainerVolume
                      totalCaloriesPerLitter
                      sugerLevel
                      sugarLevelIn1Litter
                      containerType
                      produktPackaging
                      productLabels
                    }
                    matkombinationer {
                      nodes {
                        name
                        categoriesImagesAndOtherFields {
                          categoriesImage {
                            node {
                              sourceUrl
                            }
                          }
                        }
                      }
                    }
                    aromer {
                      nodes {
                        id
                        name
                        slug
                      }
                    }
                    smakar {
                      nodes {
                        id
                        name
                        slug
                      }
                    }
                    fargers {
                      nodes {
                        id
                        name
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
      variables: { slug },
    });

    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
// export async function getPostProductRecommendationBySlug(slug) {
//   try {
//     const { data } = await client.query({
//       query: gql`
//         query GetPostProductRecommendationBySlug($slug: String!) {
//           postBy(slug: $slug) {
//             date
//           }
//         `,
//       variables: { slug },
//     });

//     return data.postBy;
//   } catch (error) {
//     console.error('Error fetching post product recommendations:', error);
//     return null;
//   }
// }
export async function getAllCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllCategories {
          categories {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
    });

    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

async function getCategoryBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query CategoryBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            name
            description
          }
        }
      `,
      variables: { slug },
    });

    return data.category;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}
async function getPostsByCategoryInternal(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostsByCategory($categorySlug: String!) {
          posts(where: { categoryName: $categorySlug }, first: 100) {
            nodes {
              id
              title
              slug
              excerpt
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  description
                  slug
                }
              }
            }
          }
        }
      `,
      variables: { categorySlug: slug },
    });

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}
export async function getPostsByCategory(slug) {
  // Fetch posts for the category
  const posts = await getPostsByCategoryInternal(slug);

  // Fetch the category name and description based on the slug
  const categoryData = await getCategoryBySlug(slug);
  const categoryName = categoryData ? categoryData.name : null;
  const categoryDescription = categoryData ? categoryData.description : null;

  return { posts, categoryName, categoryDescription };
}
