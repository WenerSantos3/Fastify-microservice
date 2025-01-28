export default {
  schema: {
    description: "Retorna todas as configurações globais",
    tags: ["Global Settings"],
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            value: { type: "string" },
          },
        },
      },
    },
  },
};
