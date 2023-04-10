import { IsOptional, IsString } from 'class-validator';

export class CreateTypeServiceDto {
  @IsOptional()
  @IsString()
  id_service?: number;

  @IsString()
  name: string;
}
