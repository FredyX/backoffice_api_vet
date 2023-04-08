import { Injectable } from '@nestjs/common';
import { CreateTypeBreedDto } from './dto/create-type_breed.dto';
import { UpdateTypeBreedDto } from './dto/update-type_breed.dto';

@Injectable()
export class TypeBreedService {
  create(createTypeBreedDto: CreateTypeBreedDto) {
    return 'This action adds a new typeBreed';
  }

  findAll() {
    return `This action returns all typeBreed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeBreed`;
  }

  update(id: number, updateTypeBreedDto: UpdateTypeBreedDto) {
    return `This action updates a #${id} typeBreed`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeBreed`;
  }
}
