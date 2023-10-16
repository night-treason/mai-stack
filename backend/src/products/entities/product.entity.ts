import { CartProduct } from 'src/intermediates/entities/carts-products.entity';
import { OrderProduct } from 'src/intermediates/entities/orders-products.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.product)
  cartsProducts: CartProduct[];
  
  @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
  ordersProducts: OrderProduct[];

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  weight: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  depth: number;

  @Column()
  price: number;
}
