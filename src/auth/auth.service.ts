import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateEmployeeDto } from './dto/create-employe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { Incharge } from './entities/incharge.entity';
import { TypeServices } from 'src/type-service/type-service.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly typeServices: TypeServices,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,

    @InjectRepository(Incharge)
    private readonly inchargeRepository: Repository<Incharge>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      //agregamos a la persona
      const person = this.personRepository.create(createEmployeeDto);
      const result = await this.personRepository.save(person);

      //obtenemos los servicios que  ofrecera el empleado
      const id_ = [3, 5];
      const typeService = await this.typeServices.findByIds(id_);
      //agregamos a encargados
      const newIncharge = await this.inchargeRepository.create({
        person,
        type_services: typeService,
      });
      this.inchargeRepository.save(newIncharge);

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
