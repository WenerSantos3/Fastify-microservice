import { IsString, IsNotEmpty } from 'class-validator';

export class GetGlobalSettingsByKeyDto {
    @IsNotEmpty({ message: 'O campo "key" não pode estar vazio.' })
    @IsString({ message: 'O campo "key" deve ser uma string'})
    key!: string;
}