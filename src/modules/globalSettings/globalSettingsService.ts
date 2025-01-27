import { GlobalSetting } from '../../entities/globalSettingEntity';
import { createGlobalSettingRepository, getAllGlobalSettingsRepository } from './globalSettingsRepository';

export const getAllGlobalSettingsService = async (): Promise<GlobalSetting[]> => {
  return getAllGlobalSettingsRepository();
};

export const createGlobalSettingService = async (key: string, value: string): Promise<GlobalSetting> => {
  return createGlobalSettingRepository(key, value);
};
