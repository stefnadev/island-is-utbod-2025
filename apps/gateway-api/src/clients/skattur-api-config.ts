import type { CreateClientConfig } from './skattur-api/client.gen';

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: 'http://localhost:3001',
});
