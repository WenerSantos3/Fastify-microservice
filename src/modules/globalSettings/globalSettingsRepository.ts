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

export const getGlobalSettingsByKeysRepository = async (key: string): Promise<string | null> => {
  const result = await prisma.globalSettings.findFirst({
    where: { key }, 
    select: { value: true }, 
  });

  return result?.value || null; 
};