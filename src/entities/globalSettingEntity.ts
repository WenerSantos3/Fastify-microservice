export interface GlobalSetting {
  id: number;
  key: string;
  value: string;
}

export interface CreateGlobalSettingRequestBody {
  key: string;
  value: string;
}