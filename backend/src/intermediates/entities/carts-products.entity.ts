import { Cart } from "src/carts/entities/cart.entity";
import { Product } from "src/products/entities/product.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";

@Entity('carts_products')
export class CartProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, cart => cart.cartsProducts)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartsProducts)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number
}