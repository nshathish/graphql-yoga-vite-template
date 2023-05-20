
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.graphql",
  generates: {
    "./src/graphql/generated/resolver-types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
