import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
