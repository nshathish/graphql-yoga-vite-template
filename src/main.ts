import express, { Request, Response } from 'express';
import { readFileSync } from 'node:fs';
import { createYoga, createSchema } from 'graphql-yoga';

import { Resolvers } from './graphql/generated/resolver-types';

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8');
const resolvers: Resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema });

const app = express();
app.use(yoga.graphqlEndpoint, yoga);

app.get('/', (_: Request, res: Response) => {
  res.send('grpahql url: http://localhost:4000/graphql');
});

app.listen(4000, () => {
  console.log('GraphQL Server is listening on http://localhost:4000');
});

export const viteNodeApp = app;