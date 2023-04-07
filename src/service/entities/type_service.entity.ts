import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Incharge } from '../../auth/entities/incharge.entity';
@Entity()
export class TypeService {
  @PrimaryGeneratedColumn()
  id_service: number;

  @Column()
  name: string;

  @ManyToMany(() => Incharge, (incharge) => incharge.type_services)
  incharges: Incharge[];
  type_service_incharges: any;
}
