import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/gateway-api/schema.gql',
  documents: './apps/web/**/*.gql',
  generates: {
    'apps/web/grapql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
