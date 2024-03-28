const bookRouteDoc = {
  "/books": {
    post: {
      tags: ["Books"],
      summary: "Cria um livro",
      description:
        "Um usuário pode fazer a criação de um livro. Precisa de um bearer token",
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  name: "The Call of Cthulhu",
                  author: "H. P. Lovecraft",
                  type: "virtual",
                  price: 5,
                },
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["Books"],
      summary: "Lista os livros",
      description: "Faz a listagem de todos os livros no sistema",
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  count: 0,
                  book: [],
                },
              },
            },
          },
        },
      },
    },
  },
  "/books/:id": {
    delete: {
      tags: ["Books"],
      summary: "Deleta um livro",
      description:
        "Faz a deleção de um livro pelo seu id pelo usuário que o criou. Precisa de um bearer token",
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

module.exports = bookRouteDoc;
