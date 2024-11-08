import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllPages() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPages {
          pages {
            nodes {
              id
              title
              slug
            }
          }
        }
      `,
    });

    return data.pages.nodes;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageById(id) {
  try {
    const { data } = await client.query({
      query: gql`
        query PageById($id: ID!) {
          page(id: $id) {
            id
            title
            content
            slug
          }
        }
      `,
      variables: { id },
    });

    return data.page;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query PageBySlug($slug: ID!) {
          page(id: $slug, idType: URI) {
            id
            title
            content
            slug
          }
        }
      `,
      variables: { slug },
    });

    return data.page;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
}
