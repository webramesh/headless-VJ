'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getAllWineCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllWineCategories {
          categories {
            nodes {
              categoryId
              count
              name
              slug
              categoriesImagesAndOtherFields {
                categoriesImage {
                  node {
                    sourceUrl
                  }
                }
                shortDescription
                categorycolorpicker
              }
            }
          }
        }
      `,
    });

    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching wine categories:', error);
    return [];
  }
}

export async function getWineCategoryById(categoryId) {
  try {
    const { data } = await client.query({
      query: gql`
        query WineCategoryById($categoryId: ID!) {
          category(id: $categoryId) {
            categoryId
            count
            name
            categoriesImagesAndOtherFields {
              categoriesImage {
                node {
                  sourceUrl
                }
              }
              shortDescription
              categorycolorpicker
            }
          }
        }
      `,
      variables: { categoryId },
    });

    return data.category;
  } catch (error) {
    console.error('Error fetching wine category:', error);
    return null;
  }
}
