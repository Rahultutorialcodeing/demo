import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest, NextResponse } from 'next/server';


const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const typeDefs = `
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
    context: (req: NextRequest, res: NextResponse) => {
      return { req, res }; // Return a valid context object
    },
  });

export { handler as GET, handler as POST};
