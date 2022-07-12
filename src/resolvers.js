// node-graphql/src/resolvers.js

const { prisma } = require('./database.js');

const resolvers = {
  Query: {
    cards: (parent, args) => {
      return prisma.card.findMany({});
    },
    card: (parent, args) => {
      return prisma.card.findFirst({
        where: { id: Number(args.id) },
      });
    },
  },
}

module.exports = {
    resolvers,
}
