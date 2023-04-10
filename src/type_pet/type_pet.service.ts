import { Injectable } from '@nestjs/common';
import { CreateTypePetDto } from './dto/create-type_pet.dto';
import { UpdateTypePetDto } from './dto/update-type_pet.dto';

@Injectable()
export class TypePetService {
  create(createTypePetDto: CreateTypePetDto) {
    return 'This action adds a new typePet';
  }

  findAll() {
    return `This action returns all typePet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typePet`;
  }

  update(id: number, updateTypePetDto: UpdateTypePetDto) {
    return `This action updates a #${id} typePet`;
  }

  remove(id: number) {
    return `This action removes a #${id} typePet`;
  }
}
