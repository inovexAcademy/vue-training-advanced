import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

// based on: https://vue-blueprint.schwarz/examples/api-client.html
export default defineConfig({
  input: './src/apiSpecification/products_api_spec.yaml',
  output: {
    path: './src/api',
    format: 'prettier',
  },
  plugins: [
    ...defaultPlugins,
    { name: '@hey-api/client-fetch', throwOnError: false },
  ],
});
