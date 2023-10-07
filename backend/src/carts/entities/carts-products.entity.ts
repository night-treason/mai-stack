import { Cart } from "src/carts/entities/cart.entity";
import { Product } from "src/products/entities/product.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";

@Entity('cart_products')
export class CartProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, cart => cart.cartProducts)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartProducts)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number
}