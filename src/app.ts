// src/app.ts
import Fastify from 'fastify';
import { globalSettingsRoutes } from './routes/globalSettingsRoutes';

const app = Fastify();

app.register(globalSettingsRoutes);


app.listen({port:3000}, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
