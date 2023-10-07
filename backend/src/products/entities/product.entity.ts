import { CartProduct } from 'src/carts/entities/carts-products.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.product)
  cartProducts: CartProduct[];

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
