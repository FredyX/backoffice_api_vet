import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetModule } from './pet/pet.module';
import { TypeServiceModule } from './type-service/type-service.module';
import { TypePetModule } from './type_pet/type_pet.module';
import { TypeBreedModule } from './type_breed/type_breed.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    PetModule,
    TypeServiceModule,
    TypePetModule,
    TypeBreedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
