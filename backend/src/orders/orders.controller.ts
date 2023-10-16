import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { OrderResDTO } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getCartItems(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  createOrderFromCart(): Promise<Order> {
    return this.ordersService.createOrderFromCart();
  }
}
