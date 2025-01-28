import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateGlobalSettingDto {
  @IsString()
  @MinLength(1, { message: 'O campo "key" não pode estar vazio.' })
  @IsNotEmpty()
  key!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1, { message: 'O campo "value" não pode estar vazio.' })
  value!: string;
}
