// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql', // TODO: read this from environment variable
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
