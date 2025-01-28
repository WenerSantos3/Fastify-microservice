// src/app.ts
import Fastify from 'fastify';
import { globalSettingsRoutes } from './routes/globalSettingsRoutes';

const app = Fastify();

app.register(globalSettingsRoutes);

// Registrar o middleware globalmente
// app.addHook('onRequest', testMiddleware);

app.listen({port:4000}, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
