import { prisma } from "~/infra/prismaClient";

export const getAllGlobalSettingsRepository = async () => {
  return await prisma.globalSettings.findMany();
};

export const createGlobalSettingRepository = async (key: string, value: string) => {
  return await prisma.globalSettings.create({
    data: {
      key,
      value,
    },
  });
};
