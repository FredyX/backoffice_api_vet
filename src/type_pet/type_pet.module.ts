import { Module } from '@nestjs/common';
import { TypePetService } from './type_pet.service';
import { TypePetController } from './type_pet.controller';

@Module({
  controllers: [TypePetController],
  providers: [TypePetService]
})
export class TypePetModule {}
