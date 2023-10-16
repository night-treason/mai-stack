import { CartProduct } from "src/intermediates/entities/carts-products.entity";
import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "src/orders/entities/order.entity";

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.cart)
  cartsProducts: CartProduct[];

  @OneToMany(() => Order, order => order.cart)
  orders: Order[];
}