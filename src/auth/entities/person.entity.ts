import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Incharge } from './incharge.entity';
import { Seller } from './sellers.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id_person: number;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  direction: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  @ManyToOne(() => Person, (person) => person.id_person)
  id_creator: number;

  @OneToMany(() => Incharge, (incharge) => incharge.person)
  incharges: Incharge[];

  @OneToMany(() => Seller, (seller) => seller.id_person)
  seller: Seller;
}
