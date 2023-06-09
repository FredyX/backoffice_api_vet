import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @IsString()
  phone: string;

  @IsString()
  direction: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  @MinLength(8)
  //TODO make a strong password
  password?: string;

  @IsString()
  @MinLength(1)
  rol: string;

  @IsString()
  gender: string;

  @IsString()
  nationality: string;

  @IsString()
  dni: string;

  @IsString()
  @IsOptional()
  id_service?: string;
}
