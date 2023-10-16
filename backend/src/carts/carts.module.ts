import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProduct } from 'src/intermediates/entities/carts-products.entity';
import { Product } from 'src/products/entities/product.entity';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { Cart } from './entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Cart, CartProduct])],
  providers: [CartsService],
  controllers: [CartsController],
})

export class CartsModule {}
