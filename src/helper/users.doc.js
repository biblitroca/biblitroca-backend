const user = [
  {
    id: 3,
    name: "Alexa",
    email: "alexa@mail.com",
    admin: false,
    createdAt: "2024-03-27",
    updatedAt: "2024-03-27",
    deletedAt: null,
  },
];

const userRouteDoc = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "Cria um usuário",
      description: "Faz a criação de um novo usuário",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Nome do usuário",
                  example: "Alexa",
                },
                email: {
                  type: "string",
                  description: "Email do usuário",
                  example: "alexa@mail.com",
                },
                password: {
                  type: "string",
                  description: "Senha do usuário",
                  example: "alexa123",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: user[0],
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["Users"],
      summary: "Lista os usuários",
      description:
        "Faz a listagem de todos os usuários. Precisa de um bearer token",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  count: 1,
                  user,
                },
              },
            },
          },
        },
      },
    },
  },
  "/users/:id": {
    patch: {
      tags: ["Users"],
      summary: "Altera um usuário",
      description:
        "Faz uma alteração no usuário selecionado por id. Precisa de um bearer token",
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  name: "Alexa",
                  email: "alexa@mail.com",
                  password: "alexa12345",
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Users"],
      summary: "Deleta um usuário",
      description:
        "Faz a deleção do usuário selecionado por id. Precisa de um bearer token",
      parameters: [
        {
          name: "id",
          in: "query",
          description: "O id do usuário",
          type: "string",
          example: "1",
        },
      ],
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {},
              },
            },
          },
        },
      },
    },
  },
};

module.exports = userRouteDoc;
