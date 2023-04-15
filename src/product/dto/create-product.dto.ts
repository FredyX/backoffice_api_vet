import {IsString, IsDecimal} from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;
  
    @IsString()
    detail: string;
  
    @IsDecimal()
    price: number;
  
    @IsString()
    stage: string;
  
    @IsString()
    brand: string;
}
