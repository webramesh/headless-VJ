'use client'
import { ApolloProvider as BaseApolloProvider } from '@apollo/client'
import { getClient } from '../../lib/api/apolloclient'

export default function ApolloProvider({ children }) {
  const client = getClient();
  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>
}