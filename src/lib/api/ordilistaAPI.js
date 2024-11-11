'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function countOrdlista(cursor = null, allOrdlista = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountOrdlista($cursor: String) {
          ordlista(first: 100, after: $cursor) {
            nodes {
              id
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      `,
      variables: { cursor },
    });

    const newOrdlista = data.ordlista.nodes;
    const updatedOrdlista = [...allOrdlista, ...newOrdlista];

    if (data.ordlista.pageInfo.hasNextPage) {
      return countOrdlista(data.ordlista.pageInfo.endCursor, updatedOrdlista);
    }

    return updatedOrdlista.length;
  } catch (error) {
    console.error('Error fetching Ordlista', error);
    return allOrdlista.length;
  }
}

export async function getAllOrdlistaCategories() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilistaCategory {
          ordlistaCategories {
            nodes {
              name
              ordlista {
                nodes {
                  title
                  uri
                  slug
                }
              }
            }
          }
        }
      `,
    });

    return data.ordlistaCategories.nodes;
  } catch (error) {
    console.error('Error fetching odilista:', error);
    return [];
  }
}

export async function getAllOrdlista(first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllOdilista($first: Int, $last: Int, $after: String, $before: String) {
          ordlista(first: $first, last: $last, after: $after, before: $before) {
            nodes {
              id
              title
              uri
              slug
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              ordlistaCategories {
                nodes {
                  slug
                  name
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
      `,
      variables: { first, last, after, before },
    });

    return { allOrdlista: data.ordlista.nodes, pageInfo: data.ordlista.pageInfo };
  } catch (error) {
    console.error('Error fetching odilista:', error);
    return [];
  }
}

export async function getOrdlistaCategoryBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query OrdlistaCategoryBySlug($slug: ID!) {
          ordlistaCategory(id: $slug, idType: SLUG) {
            name
            description
          }
        }
      `,
      variables: { slug },
    });

    return data.ordlistaCategory;
  } catch (error) {
    console.error('Error fetching ordlista category by slug:', error);
    return null;
  }
}

export async function countOrdlistaByCategory(category, cursor = null, allOrdlista = []) {
  try {
    const { data } = await client.query({
      query: gql`
        query CountOrdlistaByCategory($cursor: String, $category: ID!) {
          ordlistaCategory(id: $category, idType: SLUG) {
            ordlista(first: 100, after: $cursor) {
              nodes {
                id
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        }
      `,
      variables: { category, cursor },
    });

    const newOrdlista = data.ordlistaCategory.ordlista.nodes;
    const updatedOrdlista = [...allOrdlista, ...newOrdlista];

    if (data.ordlistaCategory.ordlista.pageInfo.hasNextPage) {
      return countOrdlistaByCategory(category, data.ordlistaCategory.ordlista.pageInfo.endCursor, updatedOrdlista);
    }

    return updatedOrdlista.length;
  } catch (error) {
    console.error('Error fetching regioners', error);
    return allOrdlista.length;
  }
}

export async function getOrdlistaByCategory(category, first, last, after, before) {
  try {
    const { data } = await client.query({
      query: gql`
        query OrdlistaCategoryBySlug($category: ID!, $first: Int, $last: Int, $after: String, $before: String) {
          ordlistaCategory(id: $category, idType: SLUG) {
            ordlista(first: $first, last: $last, after: $after, before: $before) {
              nodes {
                id
                slug
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                ordlistaCategories {
                  nodes {
                    slug
                    name
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        }
      `,
      variables: { category, first, last, after, before },
    });

    return { ordlista: data.ordlistaCategory.ordlista.nodes, pageInfo: data.ordlistaCategory.ordlista.pageInfo };
  } catch (error) {
    console.error('Error fetching ordlista itens by category:', error);
    return null;
  }
}

export async function getOrdlistaBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query OrdlistaBySlug($slug: String!) {
          ordlistaItemBy(slug: $slug) {
            date
            title
            content
            ordlistaCategories {
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

    return data.ordlistaItemBy;
  } catch (error) {
    console.error('Error fetching ordlista by slug:', error);
    return null;
  }
}
