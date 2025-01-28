import { FastifyInstance } from 'fastify';
import { getAllGlobalSettings, createGlobalSetting } from '../modules/globalSettings/globalSettings.controller';

export async function globalSettingsRoutes(fastify: FastifyInstance) {
  fastify.get('/', (req,reply) => {
    reply.send({message: 'Ok'})
  });
  fastify.get('/global-settings', getAllGlobalSettings);
  fastify.post('/global-settings', createGlobalSetting);
  return fastify;
}
