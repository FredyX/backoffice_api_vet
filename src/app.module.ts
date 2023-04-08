import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { PetModule } from './pet/pet.module';
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
      synchronize: true,
    }),
    AuthModule,
    ServiceModule,
    PetModule,
    TypePetModule,
    TypeBreedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
