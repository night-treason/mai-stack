import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CartProduct } from 'src/intermediates/entities/carts-products.entity';
import { OrderProductDTO, OrderResDTO } from './dto/order.dto';
import { OrderProduct } from 'src/intermediates/entities/orders-products.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(CartProduct)
    private readonly cartProductRepository: Repository<CartProduct>,
    @InjectRepository(CartProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
  ) {}

  async createOrderFromCart(): Promise<Order> {
    const testCartId = 1;

    let totalAmount = 0;
    let totalSum = 0;

    const cartProducts = await this.cartProductRepository.find({
      where: { cart: { id: testCartId } },
      relations: { product: true },
    });
    const order = this.orderRepository.create({ status: 'New', total_amount: totalAmount, total_sum: totalSum });
    await this.orderRepository.save(order);

    for (const cartProduct of cartProducts) {
      const orderProduct = this.orderProductRepository.create({
        order: order,
        product: cartProduct.product,
        quantity: cartProduct.quantity,
      });
      await this.orderProductRepository.save(orderProduct);

      totalAmount += orderProduct.quantity;
      totalSum += orderProduct.product.price;

      await this.cartProductRepository.remove(cartProduct);
    }

    // const updatedOrderProducts = await this.orderProductRepository.find({
    //   where: { order: { id: order.id } },
    //   relations: { product: true },
    // });
    // const updatedTotalAmount = updatedOrderProducts.reduce(
    //   (amount, orderProduct) => amount + orderProduct.quantity,
    //   0,
    // );
    // const updatedTotalSum = updatedOrderProducts.reduce(
    //   (sum, orderProduct) => sum + orderProduct.product.price,
    //   0,
    // );

    await this.orderRepository.update(order.id, {
      total_amount: totalAmount,
      total_sum: totalSum,
    });

    const updatedOrder = await this.orderRepository.findOne({
      where: { id: order.id },
    });
    
    return updatedOrder;
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.orderRepository.find({ 
        relations: ["products.product"] 
    });

    return orders;
  }
}
