# Prova2

Este projeto é uma aplicação backend desenvolvida em Node.js utilizando Express e GraphQL. Ele fornece uma API REST e uma API GraphQL para gerenciar disciplinas de um curso.

## Estrutura do Projeto

- `app.js`: Arquivo principal que configura e inicia o servidor Express e Apollo Server.
- `controllers/`: Contém os controladores para as APIs REST e GraphQL.
  - `graphqlController.js`: Controlador para a API GraphQL.
  - `restController.js`: Controlador para a API REST.
- `data/`: Contém o arquivo JSON com os dados das disciplinas.
  - `disciplinas.json`: Arquivo JSON com os dados das disciplinas.
- `models/`: Contém os resolvers e typeDefs para a API GraphQL.
  - `resolvers.js`: Define os resolvers para as queries e mutations do GraphQL.
  - `typeDefs.js`: Define os typeDefs para o GraphQL.
- `routes/`: Contém as rotas para as APIs REST e GraphQL.
  - `graphqlRoutes.js`: Define a rota para a API GraphQL.
  - `restRoutes.js`: Define as rotas para a API REST.

## Instalação

1. Certifique-se de ter o Node.js instalado na versão especificada no arquivo `.nvmrc`.
2. Instale as dependências do projeto:

   ```sh
   npm install

Uso
Para iniciar o servidor, execute o seguinte comando:

node [app.js](http://_vscodecontentref_/1)

Workspace
Claro! Aqui está um exemplo de README.md para o seu projeto:

Uso
Para iniciar o servidor, execute o seguinte comando:

O servidor estará disponível em <http://localhost:3000>.

API REST
As rotas da API REST estão disponíveis em <http://localhost:3000/api/rest>. As seguintes rotas estão disponíveis:

GET /api/rest/periodos: Obtém todos os períodos.
GET /api/rest/disciplinas: Obtém todas as disciplinas.
GET /api/rest/disciplinas/:id: Obtém uma disciplina pelo ID.
POST /api/rest/disciplinas: Cria uma nova disciplina.
PUT /api/rest/disciplinas/:id: Atualiza uma disciplina existente.
DELETE /api/rest/disciplinas/:id: Remove uma disciplina pelo ID.
API GraphQL
A API GraphQL está disponível em <http://localhost:3000/api/graphql>. Você pode acessar o GraphiQL para explorar a API.

Dependências
express: Framework web para Node.js.
apollo-server-express: Integração do Apollo Server com Express.
express-graphql: Middleware para integrar GraphQL com Express.
graphql: Biblioteca para construir APIs GraphQL.