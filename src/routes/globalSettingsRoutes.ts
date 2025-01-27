import { FastifyInstance } from 'fastify';
import { getAllGlobalSettings, createGlobalSetting } from '../modules/globalSettings/globalSettingsController';

export async function globalSettingsRoutes(fastify: FastifyInstance) {
  fastify.get('/global-settings', getAllGlobalSettings);
  fastify.post('/global-settings', createGlobalSetting);
}
