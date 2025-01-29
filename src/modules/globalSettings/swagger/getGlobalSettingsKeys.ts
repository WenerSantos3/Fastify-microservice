export default {
    schema: {
      description: "Busca o valor de uma key no global-settings",
      tags: ["Global Settings"],
      example: {
        key: "SALES_BLOCK_DAYS",  // Exemplo de chave
      },
      body: {
        type: "object",
        required: ["key", "value"],
        properties: {
          key: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            value: { type: "string" },
          },
        },
      },
    },
  };
  