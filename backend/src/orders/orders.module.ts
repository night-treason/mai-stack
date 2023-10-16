import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { CartProduct } from 'src/intermediates/entities/carts-products.entity';
import { OrderProduct } from 'src/intermediates/entities/orders-products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, CartProduct, OrderProduct])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
