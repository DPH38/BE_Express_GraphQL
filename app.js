const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const restRoutes = require('./routes/restRoutes');
const { typeDefs, resolvers } = require('./controllers/graphqlController');

const app = express();
const port = 3000;

// Middleware para JSON
app.use(express.json());

// Rotas REST
app.use('/api/rest', restRoutes);

// Configuração do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(res => {
  server.applyMiddleware({ app, path: '/api/graphql' });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`GraphQL disponível em http://localhost:${port}${server.graphqlPath}`);
  });
});