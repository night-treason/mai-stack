import { CartProduct } from "src/carts/entities/carts-products.entity";
import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.cart)
  cartProducts: CartProduct[];
}