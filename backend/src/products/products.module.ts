import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { CartProduct } from 'src/carts/entities/carts-products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, CartProduct])],
  providers: [ProductsService],
  controllers: [ProductsController],
})

export class ProductsModule {}
