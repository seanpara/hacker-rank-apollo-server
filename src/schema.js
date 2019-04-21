const { gql } = require('apollo-server');

const typeDefs = gql`
  type Article {
    by: String
    descendants: Integer
    id: ID!
    kids:[Integer]
    score: Integer
    time: Integer
    title: String
    type: String
    url: String
  }

  type Comment {
    by: String
    id: ID!
    kids: [Integer]
    parent: Integer
    text: String
    time: Integer
    type: String
  }
`

module.exports = typeDefs;
