// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri:
        process.env.GATEWAY_API_GRAPHQL_URL || 'http://localhost:3000/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
