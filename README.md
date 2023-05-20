steps to create:

1. `npm create vite@latest` and complete setup selecting vanillajs template
2. create `schema.graphql` file (eg in `src/graphql`)
3. run `npm install -D @graphql-codegen/cli`
4. run `npx graphql-code-generator init` and complete setup
5. then run `npm install`
6. if the codegen command in `package.json` is 'generate', run 'npm run generate'
7. install `express` and `vite-node-plugin`
8. create `vite.config.js` and add the code as in this repo
9. complete `src/index.ts` as in this repo
10. you're done for a basic setup of vite + graphql-yoga + express + codegen