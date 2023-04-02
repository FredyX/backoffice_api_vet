import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from './person.entity';
//import { TypeService } from './type-service.entity';

@Entity()
export class Incharge {
  @PrimaryGeneratedColumn()
  id_inchage: number;

  @ManyToOne(() => Person, person => person.incharges)
  person: Person;

  //@ManyToOne(() => TypeService, typeService => typeService.id_service)
  //id_type_service: number;
}
