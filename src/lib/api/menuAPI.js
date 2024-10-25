import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.SITE_URL_ENDPOINT,
  fetch,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export async function getMainMenu() {
  const query = gql`
    query FetchMenu {
      menus(where: { location: PRIMARY }) {
        nodes {
          id
          name
          menuItems {
            edges {
              node {
                id
                label
                path
                parentId
                childItems {
                  edges {
                    node {
                      id
                      label
                      path
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.query({ query });

    if (!response) {
      throw new Error('No response received from the GraphQL endpoint');
    }

    if (!response.data) {
      throw new Error('Response does not contain a data property');
    }

    if (!response.data.menus || !response.data.menus.nodes || response.data.menus.nodes.length === 0) {
      throw new Error('No menu data found in the response');
    }

    return response.data.menus.nodes[0];
  } catch (error) {
    console.error('Error fetching menu:', error);
    console.error('Error details:', {
      message: error.message,
      networkError: error.networkError
        ? {
            message: error.networkError.message,
            stack: error.networkError.stack,
          }
        : null,
      graphQLErrors: error.graphQLErrors,
    });
    return null;
  }
}
