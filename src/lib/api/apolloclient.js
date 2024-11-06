import { ApolloClient, InMemoryCache } from '@apollo/client';

let client;

export const getClient = () => {
  if (!client) {
    client = new ApolloClient({
      uri: process.env.SITE_URL_ENDPOINT || 'https://www.vin.handworknepal.com/graphql',
      cache: new InMemoryCache(),
    });
  }
  return client;
};
