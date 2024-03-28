const loginRouteDoc = {
  "/login": {
    post: {
      tags: ["Login"],
      summary: "Loga no sistema",
      description:
        "Faz um usuário existente logar no sistema. Precisa ter um usuário já criado",
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  email: "alexa@mail.com",
                  password: "alexa123",
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = loginRouteDoc;
