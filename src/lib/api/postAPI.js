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

export async function getAllArticles() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllArticles {
          posts(first: 1000) {
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
    console.error('Error fetching all articles:', error);
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
                slug
              }
            }
            author {
              node {
                name
                customAvatar
              }
            }

            comments {
              nodes {
                date
                id
                content
                commentedOn {
                  node {
                    ... on Post {
                      id
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

function decodeGlobalId(globalId) {
  // Decode the base64 global ID
  const decodedString = atob(globalId);
  // Extract the numeric ID (e.g., "post:30291" -> 30291)
  const [, id] = decodedString.split(':');
  return parseInt(id, 10); // Ensure it's an integer
}

export async function addComment({ postId, content, authorName, authorEmail }) {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation AddComment($input: CreateCommentInput!) {
          createComment(input: $input) {
            comment {
              id
              content
              date
              commentedOn {
                node {
                  ... on Post {
                    id
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        input: {
          commentOn: postId, // Pass the string postId directly
          content: content,
          author: authorName || 'Anonymous',
          authorEmail: authorEmail,
        },
      },
    });

    return data.createComment.comment;
  } catch (error) {
    console.error('Error adding comment:', error);
    return null;
  }
}

// export async function addComment(postId, content) {
//   try {
//     const { data } = await client.mutate({
//       mutation: gql`
//         mutation CreateComment($postId: ID!, $content: String!) {
//           createComment(input: { postId: $postId, content: $content }) {
//             comment {
//               id
//               date
//               content
//               commentedOn {
//                 node {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       `,
//       variables: { postId, content },
//     });

//     return data.createComment.comment;
//   } catch (error) {
//     console.error('Error adding comment:', error);
//     return null;
//   }
// }
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

export async function getCategoryBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query CategoryBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            name
            description
            count
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

export async function getPostsByCategory(category, first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query PostsByCategory($category: String!, $first: Int, $last: Int, $after: String, $before: String) {
          posts(where: { categoryName: $category }, first: $first, last: $last, after: $after, before: $before) {
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
                  slug
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
          }
        }
      `,
      variables: { category, first, last, after, before },
    });

    return { posts: data.posts.nodes, pageInfo: data.posts.pageInfo };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}
