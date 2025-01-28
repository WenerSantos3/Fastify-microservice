export default {
  schema: {
    description: "Cria uma nova configuração global",
    tags: ["Global Settings"],
    body: {
      type: "object",
      required: ["name", "value"],
      properties: {
        name: { type: "string" },
        value: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          value: { type: "string" },
        },
      },
    },
  },
};
