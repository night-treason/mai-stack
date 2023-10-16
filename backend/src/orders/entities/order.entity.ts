import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { OrderProduct } from 'src/intermediates/entities/orders-products.entity';
import { Cart } from 'src/carts/entities/cart.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, cart => cart.orders)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart[];

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
  products: OrderProduct[];

  @Column()
  status: string;

  @Column()
  total_sum: number;

  @Column()
  total_amount: number;
}
