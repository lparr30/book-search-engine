const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String!
        email: String
    }

    type Book {
        author: String
        description: String
    }

    type Query {
        
    }

    type Mutation {

    }
`