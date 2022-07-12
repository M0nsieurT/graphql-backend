//* node-graphql/src/schema.js

const { gql } = require('apollo-server')

const typeDefs = gql`

  type Card {
    id: ID!
    name: String!
    description: String!
    power: Int
    element_id: Int
  }

  type Query {
    cards: [Card!]!
    card(id: ID!): Card
  }

  type Mutation {
    registerCard(name: String!, description: String!, power: String, element_id: String): Card!
    enroll(id: ID!): Card
  }
`
module.exports = {
  typeDefs,
}