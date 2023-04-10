import { Module } from '@nestjs/common';
import { TypeBreedService } from './type_breed.service';
import { TypeBreedController } from './type_breed.controller';

@Module({
  controllers: [TypeBreedController],
  providers: [TypeBreedService]
})
export class TypeBreedModule {}
