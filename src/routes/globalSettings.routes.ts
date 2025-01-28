import { FastifyInstance } from "fastify";
import {
  getAllGlobalSettings,
  createGlobalSetting,
} from "../modules/globalSettings/globalSettings.controller";
import schemaSwaggerGlobalSettings from "~/modules/globalSettings/swagger/getGlobalSettings";
import createGlobalSettings from "../modules/globalSettings/swagger/createGlobalSettings";

export async function globalSettingsRoutes(fastify: FastifyInstance) {
  fastify.get("/global-settings", schemaSwaggerGlobalSettings, getAllGlobalSettings);

  fastify.post("/global-settings", createGlobalSettings, createGlobalSetting);

  return fastify;
}
