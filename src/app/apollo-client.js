import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-wordpress-site.com/graphql', 
  cache: new InMemoryCache(),
});

export default client;
