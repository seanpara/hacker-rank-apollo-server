const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const ArticleAPI = require('./datasources/article');
const CommentAPI = require('./datasources/comment');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    articleAPI: new ArticleAPI(),
    commentAPI: new CommentAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
