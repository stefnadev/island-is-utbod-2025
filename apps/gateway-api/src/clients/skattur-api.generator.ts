import { createClient } from '@hey-api/openapi-ts';

createClient({
  input: `${process.env.SKATTUR_API || 'http://localhost:3000'}/api-json`,
  output: 'src/clients/skattur-api',
  plugins: [
    {
      name: '@hey-api/client-fetch',
      runtimeConfigPath: './skattur-api-config.ts',
    },
  ],
});
