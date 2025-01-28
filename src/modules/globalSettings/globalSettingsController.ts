import { FastifyRequest, FastifyReply } from "fastify";
import { plainToClass } from "class-transformer";
import { validateDto } from "../../utils/validation"; 
import { 
  createGlobalSettingService, 
  getAllGlobalSettingsService, 
  getGlobalSettingsByKeysService 
} from "./globalSettingsService";
import { CreateGlobalSettingDto } from "./DTO/CreateGlobalSettingDTO";
import { GetGlobalSettingsByKeyDto } from "./DTO/GetGlobalSettingsByKeyDTO";

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

export const createGlobalSetting = async (
  req: FastifyRequest<{ Body: CreateGlobalSettingDto }>, 
  reply: FastifyReply
) => {
  const createGlobalSettingDto = plainToClass(CreateGlobalSettingDto, req.body);

  const validationErrors = await validateDto(createGlobalSettingDto);
  if (validationErrors.length > 0) {
    return reply.status(400).send({ errors: validationErrors });
  }

  const { key, value } = createGlobalSettingDto;

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

export const getGlobalSettingsByKeys = async (
  req: FastifyRequest<{ Body: GetGlobalSettingsByKeyDto }>, 
  reply: FastifyReply
) => {
  const getGlobalSettingsByKeyDto = plainToClass(GetGlobalSettingsByKeyDto, req.body);

  const validationErrors = await validateDto(getGlobalSettingsByKeyDto);
  if (validationErrors.length > 0) {
    return reply.status(400).send({ errors: validationErrors });
  }

  const { key } = getGlobalSettingsByKeyDto;

  try {
    const settings = await getGlobalSettingsByKeysService(key);
    reply.send(settings);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch settings by key" });
  }
};
