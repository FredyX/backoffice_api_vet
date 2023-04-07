import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TypeService } from '../../service/entities/type_service.entity';
import { Person } from './person.entity';

@Entity()
export class Incharge {
  @PrimaryGeneratedColumn()
  id_inchage: number;

  @ManyToOne(() => Person, (person) => person.incharges)
  @JoinColumn({ name: 'id_person' })
  person: Person;

  @ManyToMany(() => TypeService)
  @JoinTable({
    name: 'pet.type_services_incharges',
    joinColumn: {
      name: 'id_incharge',
      referencedColumnName: 'id_inchage',
    },
    inverseJoinColumn: {
      name: 'id_type_service',
      referencedColumnName: 'id_service',
    },
  })
  type_services: TypeService[];
}
