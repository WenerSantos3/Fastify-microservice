export default {
  schema: {
    description: "Busca o valor de uma key no global-settings",
    tags: ["Global Settings"],
    body: {
      type: "object",
      required: ["key"],
      properties: {
        key: { type: "string" },
      },
      examples: [
        {
          key:"SALES_BLOCK_DAYS",
        },
      ],
    },
    response: {
      200: {
        type: "object",
        properties: {
          value: { type: "string" },
        },
        examples: [
          {
            value:"10",
          },
        ],
      },
    },
  },
};
