import { FastifyInstance } from "fastify";
import {
  getAllGlobalSettings,
  createGlobalSetting,
  getGlobalSettingsByKeys,
} from "../modules/globalSettings/globalSettings.controller";
import schemaSwaggerGlobalSettings from "~/modules/globalSettings/swagger/getGlobalSettings";
import createGlobalSettings from "../modules/globalSettings/swagger/createGlobalSettings";
import getGlobalSettingsKeys from "~/modules/globalSettings/swagger/getGlobalSettingsKeys";

export async function globalSettingsRoutes(fastify: FastifyInstance) {
  fastify.get("/global-settings", schemaSwaggerGlobalSettings, getAllGlobalSettings);

  fastify.post("/global-settings", createGlobalSettings, createGlobalSetting);

  fastify.post("/global-settings/keys", getGlobalSettingsKeys, getGlobalSettingsByKeys);

  return fastify;
}
