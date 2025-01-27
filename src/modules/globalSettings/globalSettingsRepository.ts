import { prisma } from "~/infra/prismaClient";

export const getAllGlobalSettingsRepository = async () => {
  return await prisma.globalSetting.findMany();
};

export const createGlobalSettingRepository = async (key: string, value: string) => {
  return await prisma.globalSetting.create({
    data: {
      key,
      value,
    },
  });
};
