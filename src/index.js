const mongoose = require("mongoose");
const dbConfig = require("../config/database.config.js");
const { GraphQLServer } = require("graphql-yoga");
const Query = require('./graphql/resolvers/Query')
const Mutation = require('./graphql/resolvers/Mutation')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);
mongoose.connection.on("error", () => {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});
mongoose.connection.once("open", () => {
  console.log("Successfully connected to the database");
});



const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
