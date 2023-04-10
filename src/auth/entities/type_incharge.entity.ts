import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Incharge } from './incharge.entity';
import { TypeService } from '../../type-service/entities/type-service.entity';

@Entity({ name: 'type_services_incharges', schema: 'pet' })
export class TypeServiceIncharge {
  // @ManyToOne(
  //   () => TypeService,
  //   (typeService) => typeService.type_service_incharges,
  // )
  // @JoinColumn({ name: 'id_type_service' })
  // type_service: TypeService;

  @ManyToOne(() => Incharge, (incharge) => incharge.type_services)
  @JoinColumn({ name: 'id_incharge' })
  incharge: Incharge;
}
