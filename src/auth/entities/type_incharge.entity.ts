import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Incharge } from './incharge.entity';
import { TypeService } from '../../service/entities/type_service.entity';

@Entity({ name: 'pet.type_services_incharges' })
export class TypeServiceIncharge {
  @ManyToOne(
    () => TypeService,
    (typeService) => typeService.type_service_incharges,
  )
  @JoinColumn({ name: 'id_type_service' })
  type_service: TypeService;

  @ManyToOne(() => Incharge, (incharge) => incharge.type_services)
  @JoinColumn({ name: 'id_incharge' })
  incharge: Incharge;
}
