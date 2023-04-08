import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeBreedDto } from './create-type_breed.dto';

export class UpdateTypeBreedDto extends PartialType(CreateTypeBreedDto) {}
