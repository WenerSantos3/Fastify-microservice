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
    where: { key }, // Aqui, 'key' é um campo único no modelo Prisma
    select: { value: true }, // Seleciona apenas o campo 'value'
  });

  return result?.value || null; // Retorna o valor ou null, caso não encontre
};