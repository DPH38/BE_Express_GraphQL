// routes/graphqlRoutes.js
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const graphqlController = require('../controllers/graphqlController');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: graphqlController,
    graphiql: true,
});