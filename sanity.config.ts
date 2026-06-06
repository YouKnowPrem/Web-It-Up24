import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Web It Up Studio',

  projectId: 'x1ztdk1p',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: schema,
});
