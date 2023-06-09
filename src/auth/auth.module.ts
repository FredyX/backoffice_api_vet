import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Incharge } from './entities/incharge.entity';
import { Seller } from './entities/sellers.entity';
import { TypeServiceModule } from 'src/type-service/type-service.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Person, Incharge, Seller]),
    TypeServiceModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, Incharge],
  exports: [Incharge],
})
export class AuthModule {}
