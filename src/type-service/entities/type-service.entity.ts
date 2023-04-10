import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Incharge } from 'src/auth/entities/incharge.entity';
@Entity({ name: 'type_services', schema: 'pet' })
export class TypeService {
  @PrimaryGeneratedColumn({ name: 'id_service' })
  id_service: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @ManyToMany(() => Incharge, (incharge) => incharge.type_services)
  incharges: Incharge[];
}
