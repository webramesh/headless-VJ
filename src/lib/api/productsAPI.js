import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllProducts() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducts {
          produkter(first: 15) {
            nodes {
              featuredImage {
                node {
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
              slug
              title
              id
              produktslander {
                nodes {
                  name
                }
              }
            }
          }
        }
      `,
    });

    return data.produkter.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProductBySlug($slug: String!) {
          produktBy(slug: $slug) {
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
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
                slug
              }
            }
            fieldsProduct {
              productShortText
              extraReadMore1
              extraReadMore2
              pice
              productCode
              buyLink
              wineSortiment
              alcohol
              vintage
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
            smakar {
              nodes {
                name
                slug
              }
            }
            aromer {
              nodes {
                name
                slug
              }
            }
            fargers {
              nodes {
                name
                slug
              }
            }
          }
        }
      `,
      variables: { slug },
    });

    return data.produktBy;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
