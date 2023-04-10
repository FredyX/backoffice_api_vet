import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from './person.entity';

@Entity({ name: 'sellers', schema: 'pet' })
export class Seller {
  @PrimaryGeneratedColumn()
  id_seller: number;

  @ManyToOne(() => Person, (person) => person.id_person)
  id_person: number;

  @Column()
  rol: string;

  @Column()
  total_sold: number;
}
