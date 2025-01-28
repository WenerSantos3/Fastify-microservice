import { FastifyRequest, FastifyReply } from "fastify";
import {
  createGlobalSettingService,
  getAllGlobalSettingsService,
  getGlobalSettingsByKeysService,
} from "./globalSettingsService";

interface CreateGlobalSettingRequestBody {
  key: string;
  value: string;
}

interface GetGlobalSettingsByKeyRequestBody {
  key: string;
}

// Manipulador para obter todas as configurações globais
export const getAllGlobalSettings = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const settings = await getAllGlobalSettingsService();
    reply.send(settings);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch global settings" });
  }
};

// Manipulador para criar uma configuração global
export const createGlobalSetting = async (
  req: FastifyRequest<{ Body: CreateGlobalSettingRequestBody }>,
  reply: FastifyReply
) => {
  const { key, value } = req.body;

  try {
    const result = await createGlobalSettingService(key, value);
    if (typeof result === "string") {
      return reply.status(400).send({ error: result });
    }
    reply.status(201).send(result);
  } catch (error) {
    reply.status(500).send({ error: "Failed to create global setting" });
  }
};

// Manipulador para buscar configuração por chave
export const getGlobalSettingsByKeys = async (
  req: FastifyRequest<{ Body: GetGlobalSettingsByKeyRequestBody }>,
  reply: FastifyReply
) => {
  try {
    const { key } = req.body;

    if (!key || key.trim().length === 0) {
      return reply.status(400).send({ message: "Key is required" });
    }

    if(typeof key === 'string'){
      const settings = await getGlobalSettingsByKeysService(key);
      reply.send(settings);
    }
    reply.status(500).send({ error: "Failed to fetch settings by key" });
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch settings by key" });
  }
};
