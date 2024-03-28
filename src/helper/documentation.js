const userRouteDoc = require("./users.doc");
const loginRouteDoc = require("./sessions.doc");
const bookRouteDoc = require("./books.doc");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Biblitroca",
    version: "0.0.1",
    description: "Essa API foi criada para o marketplace de livros Biblitroca",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Ambiente de Desenvolvimento",
    },
    {
      url: "https://biblitroca.onrender.com",
      description: "Ambiente de Produção",
    },
  ],
  tags: [
    {
      name: "Users",
      description: "Rota de Usuários",
    },
    {
      name: "Login",
      description: "Rota de Login",
    },
    {
      name: "Books",
      description: "Rota de Livros",
    },
  ],
  paths: {
    ...userRouteDoc,
    ...loginRouteDoc,
    ...bookRouteDoc,
  },
};

module.exports = swaggerDocumentation;
