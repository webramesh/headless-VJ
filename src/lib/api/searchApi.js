import { gql } from '@apollo/client';
import { getClient } from '../api/apolloclient';

const SEARCH_QUERY = gql`
  query SearchQuery($searchTerm: String!) {
    posts(where: { search: $searchTerm }) {
      nodes {
        id
        title
        slug
      }
    }
    produkter(where: { search: $searchTerm }) {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

export async function searchContent(searchTerm) {
  const client = getClient();
  try {
    const { data } = await client.query({
      query: SEARCH_QUERY,
      variables: {
        searchTerm: searchTerm,
      },
    });

    // Combine and format the results
    const results = {
      posts: data.posts.nodes.map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        type: 'post',
      })),
      products: data.produkter.nodes.map((produkter) => ({
        id: produkter.id,
        title: produkter.title,
        slug: produkter.slug,
        type: 'produkter',
      })),
      // Combined results for easier access
      all: [
        ...data.posts.nodes.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          type: 'post',
        })),
        ...data.produkter.nodes.map((produkter) => ({
          id: produkter.id,
          title: produkter.title,
          slug: produkter.slug,
          type: 'produkter',
        })),
      ],
    };

    return results;
  } catch (error) {
    console.error('Error performing search:', error);
    return {
      posts: [],
      products: [],
      all: [],
    };
  }
}

// Helper function to get total results count
export function getResultsCount(results) {
  return results.all.length;
}

// Helper function to filter results by type
export function filterResultsByType(results, type) {
  return type === 'post' ? results.posts : results.products;
}
