import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./prisma/generated/type-graphql";
import bcrypt from "bcrypt";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from "apollo-server-core";


interface Context {
  prisma: PrismaClient;
}

async function main() {
  console.log('NODE_ENV', process.env.NODE_ENV);
  
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient({
    log: [
      {
        emit: 'stdout',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  });
  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    // https://www.apollographql.com/blog/graphql/security/why-you-should-disable-graphql-introspection-in-production/#:~:text=You%20can%20turn%20off%20introspection,%2C%20resolvers%2C%20introspection%3A%20process.
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [
      // Install a landing page plugin based on NODE_ENV
      process.env.NODE_ENV === "production" ? ApolloServerPluginLandingPageProductionDefault({ footer: false }): ApolloServerPluginLandingPageLocalDefault({ footer: false, embed: true }),
    ],
  });

  const hashedpassword = bcrypt.hashSync('password', 8);
  console.log(hashedpassword);
  
  server.listen(4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main().catch(console.error);
