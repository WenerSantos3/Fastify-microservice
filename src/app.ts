// src/app.ts
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { globalSettingsRoutes } from "./routes/globalSettings.routes";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { swaggerConfig } from "../swagger/swagger";
const app = fastify();

app.register(fastifyCors, { origin: "*" });

app.register(fastifySwagger, swaggerConfig);

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(globalSettingsRoutes);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
