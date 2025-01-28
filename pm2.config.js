module.exports = {
  apps: [
    {
      name: "greenn-fastify",
      script: "dist/app.js",
      instances: "max",
      exec_mode: "cluster",
      wait_ready: true,
    },
  ],
};
