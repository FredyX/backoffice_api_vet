import { PartialType } from '@nestjs/mapped-types';
import { CreateTypePetDto } from './create-type_pet.dto';

export class UpdateTypePetDto extends PartialType(CreateTypePetDto) {}
