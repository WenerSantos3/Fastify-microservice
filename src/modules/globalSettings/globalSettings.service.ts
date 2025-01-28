import { GlobalSetting } from "../../entities/globalSettingEntity";
import {
  createGlobalSettingRepository,
  getAllGlobalSettingsRepository,
} from "./globalSettings.repository";
import { isValidField } from "../../utils/helpers";

export const getAllGlobalSettingsService = async (): Promise<GlobalSetting[]> => {
  return getAllGlobalSettingsRepository();
};

export const createGlobalSettingService = async (
  key: string,
  value: string
): Promise<GlobalSetting | string> => {
  const isValidKey = isValidField(key);
  const isValidValue = isValidField(value);
  
  if (!isValidKey) {
    return 'O campo "key" deve ter menos de 12 caracteres e não pode estar vazio.';
  }else if(!isValidValue){
    return 'O campo "value" deve ter menos de 12 caracteres e não pode estar vazio.';
  }

  return createGlobalSettingRepository(key, value);
};
