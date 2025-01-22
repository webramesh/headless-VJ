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

export async function fetchMenu(slug) {
  const query = gql`
    query FetchMenu($slug: ID!) {
      menu(id: $slug, idType: SLUG) {
        menuItems {
          nodes {
            id
            label
            uri
            parentId
            childItems {
              nodes {
                id
                label
                uri
              }
            }
          }
        }
      }
    }
  `;
  try {
    const response = await client.query({ query, variables: { slug } });
    const menuItems = response?.data?.menu?.menuItems?.nodes?.filter((menu) => menu.parentId === null);
    return menuItems;
  } catch (error) {
    console.error('Error fetching menu:', error);
    return null;
  }
}
