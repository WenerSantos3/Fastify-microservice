import { FastifyInstance } from 'fastify';
import { getAllGlobalSettings, createGlobalSetting, getGlobalSettingsByKeys } from '../modules/globalSettings/globalSettings.controller';

export async function globalSettingsRoutes(fastify: FastifyInstance) {
  fastify.get('/global-settings', getAllGlobalSettings);
  fastify.post('/global-settings', createGlobalSetting);
  fastify.post('/global-settings/keys', getGlobalSettingsByKeys);
  return fastify;
}
