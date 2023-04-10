import { Module } from '@nestjs/common';
import { TypeServices } from './type-service.service';
import { TypeServiceController } from './type-service.controller';
import { TypeService } from './entities/type-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incharge } from 'src/auth/entities/incharge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeService, Incharge])],
  controllers: [TypeServiceController],
  providers: [TypeServices],
})
export class TypeServiceModule {}
