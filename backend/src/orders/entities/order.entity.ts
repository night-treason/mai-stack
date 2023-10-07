import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Cart } from 'src/carts/entities/cart.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Cart)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @Column()
  status: string;

  @Column()
  created_at: number;
}
