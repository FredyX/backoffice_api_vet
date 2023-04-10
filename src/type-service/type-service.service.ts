import { Injectable } from '@nestjs/common';
import { CreateTypeServiceDto } from './dto/create-type-service.dto';
import { UpdateTypeServiceDto } from './dto/update-type-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeService } from './entities/type-service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeServices {
  constructor(
    @InjectRepository(TypeService)
    private readonly repositoryType: Repository<TypeService>,
  ) {}
  async create(createTypeServiceDto: CreateTypeServiceDto) {
    try {
      const type_service = await this.repositoryType.create(
        createTypeServiceDto,
      );
      return await this.repositoryType.save(type_service);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    // return await this.repositoryType.find();
    return await this.repositoryType.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} typeService`;
  }

  update(id: number, updateTypeServiceDto: UpdateTypeServiceDto) {
    return `This action updates a #${id} typeService`;
  }
  remove(id: number) {
    return `This action removes a #${id} typeService`;
  }
}
