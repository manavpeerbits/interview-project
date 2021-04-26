const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { classes } = require("./content/classes");
const { meditations } = require("./content/meditations");
const { articles } = require("./content/articles");
const { courses } = require("./content/courses");

const resolvers = {
  Query: {
    Article: (_, { id }) => articles.find(c => c.id === id),
    Course: (_, { id }) => courses.find(c => c.id === id),
    Class: (_, { id }) => classes.find(c => c.id === id),
    Meditation: (_, { id }) => meditations.find(c => c.id === id),

    HomeScreen: () => ({
      articles,
      classes,
      meditations,
      courses
    })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
