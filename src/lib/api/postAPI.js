'use server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});
export async function getHomePageSEO(uri) {
  try {
    const { data } = await client.query({
      query: gql`
        query HomePageSEO($uri: String!) {
          pageBy(uri: $uri) {
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
      variables: { uri },
    });

    return data.pageBy.seo;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}
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
            slug
            faq {
              faq {
                faqQuestion
                faqAnswer
              }
            }
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
                slug
              }
            }

            realatedPosts {
              relatedPosts {
                nodes {
                  id
                  slug
                  ... on Post {
                    id
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    categories {
                      nodes {
                        slug
                      }
                    }
                  }
                }
              }
            }

            comments {
              nodes {
                date
                id
                content
                author {
                  name
                }
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
                    slug
                    produktslander {
                      nodes {
                        name
                        parent {
                          node {
                            name
                          }
                        }
                      }
                      nodes {
                        flag {
                          flagImage {
                            node {
                              sourceUrl
                            }
                          }
                        }
                      }
                    }

                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    fieldsProduct {
                      buyLink
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
              faq {
                faq {
                  faqQuestion
                  faqAnswer
                }
              }
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
            faq {
              faq {
                faqQuestion
                faqAnswer
              }
            }
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
              faq {
                faq {
                  faqQuestion
                  faqAnswer
                }
              }
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
