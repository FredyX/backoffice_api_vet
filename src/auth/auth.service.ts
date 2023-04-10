import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateEmployeeDto } from './dto/create-employe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const person = this.personRepository.create(createEmployeeDto);
      const result = await this.personRepository.save(person);
      return result;
    } catch (errors) {
      console.log(errors);
    }
  }

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
