const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!): User!
}

type User {
  id: ID!
  name: String!
}
`;

const resolvers = {
  Query: {
    info: () => "Test"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
