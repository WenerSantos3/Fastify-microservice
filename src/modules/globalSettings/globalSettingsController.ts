import { FastifyRequest, FastifyReply } from 'fastify';
import { createGlobalSettingService, getAllGlobalSettingsService } from './globalSettingsService';
import { CreateGlobalSettingRequestBody } from '~/entities/globalSettingEntity';

export const getAllGlobalSettings = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const settings = await getAllGlobalSettingsService();
    reply.send(settings);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const createGlobalSetting = async (req: FastifyRequest<{ Body: CreateGlobalSettingRequestBody }>, reply: FastifyReply) => {
  const { key, value } = req.body;
  
  try {
    const setting = await createGlobalSettingService(key, value);
    reply.status(201).send(setting);
  } catch (error) {
    reply.status(500).send(error);
  }
};
