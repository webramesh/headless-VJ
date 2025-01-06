'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getAllCountries() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllParentCountries {
          produktslander(first: 200, where: { parent: null }) {
            nodes {
              count
              name
              id
              slug
              categoriesImagesAndOtherFields {
                categoriesImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
    });

    return data.produktslander.nodes;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export async function getAllProducenter() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllProducenter {
          producenter(first: 200) {
            nodes {
              id
              title
              produktslander {
                nodes {
                  count
                  name
                  categoriesImagesAndOtherFields {
                    categoriesImage {
                      node {
                        altText
                        sourceUrl
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

    return data.producenter.nodes;
  } catch (error) {
    console.error('Error fetching producenter:', error);
    return [];
  }
}

export async function getProducentById(id) {
  try {
    const { data } = await client.query({
      query: gql`
        query ProducentById($id: ID!) {
          producent(id: $id) {
            id
            title
            produktslander {
              nodes {
                count
                name
                categoriesImagesAndOtherFields {
                  categoriesImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { id },
    });

    return data.producent;
  } catch (error) {
    console.error('Error fetching producent:', error);
    return null;
  }
}
