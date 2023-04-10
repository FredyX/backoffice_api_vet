import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Incharge } from './incharge.entity';
import { Seller } from './sellers.entity';

@Entity({ name: 'persons', schema: 'pet' })
export class Person {
  @PrimaryGeneratedColumn()
  id_person: number;

  @Column('varchar')
  dni: string;
  
  @Column('varchar')
  name: string;

  @Column('varchar')
  last_name: string;

  @Column('varchar')
  phone: string;

  @Column('varchar')
  direction: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  rol: string;

  @Column('varchar')
  nationality: string;

  @Column('varchar')
  gender: string;

  @ManyToOne(() => Person, (person) => person.id_creator)
  id_creator: number;

  @OneToMany(() => Incharge, (incharge) => incharge.person)
  incharges: Incharge[];

  @OneToMany(() => Seller, (seller) => seller.id_person)
  seller: Seller;
}
