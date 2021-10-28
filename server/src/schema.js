const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }
    
    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a successful mutation"
        track: Track
    }
    
    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String!
        durationInSeconds: Int
        length: Int @deprecated(reason: "Use durationInSeconds instead")
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
    }
    
    type Author{
        id: ID!
        name: String!
        photo: String
    }
    
    type Module{
        id: ID!
        title: String!
        length: Int @deprecated(reason: "Use durationInSeconds instead")
        durationInSeconds: Int
    }
`;

module.exports = typeDefs
