const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Disciplina {
    id: String
    nome: String
    descricao: String
  }

  type Periodo {
    periodo: String
    disciplinas: [Disciplina]
  }

  type Query {
    periodos: [Periodo]
    disciplinas: [Disciplina]
    disciplina(id: String!): Disciplina
  }

  type Mutation {
    criarDisciplina(periodo: String!, nome: String!, descricao: String!): Disciplina
    atualizarDisciplina(id: String!, nome: String, descricao: String): Disciplina
    removerDisciplina(id: String!): Disciplina
  }
`;

module.exports = typeDefs;