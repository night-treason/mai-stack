import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';
import { Cart } from './carts/entities/cart.entity';
import { CartProduct } from './intermediates/entities/carts-products.entity';
import { CartsModule } from './carts/carts.module';
import { OrderProduct } from './intermediates/entities/orders-products.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'pass',
      database: 'test',
      synchronize: true,
      entities: [Product, Order, Cart, CartProduct, OrderProduct],
    }),
    ProductsModule,
    CartsModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
