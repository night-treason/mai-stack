import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { Response } from 'express';

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

  @Delete(':id')
  async deleteOrder(@Param('id') orderId: string, @Res() res: Response): Promise<Response> {
    await this.ordersService.deleteOrder(orderId);
    return res.status(200).json({message: "Successfully deleted"})
  }
}
