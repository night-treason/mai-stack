// import { Cart } from "src/carts/entities/cart.entity";
// import { Order } from "src/orders/entities/order.entity";
// import { Product } from "src/products/entities/product.entity";
// import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";

// @Entity('carts_orders')
// export class CartOrder {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Cart, cart => cart.cartsOrders)
//   @JoinColumn({ name: 'cart_id' })
//   cart: Cart;

//   @ManyToOne(() => Order, order => order.cartsOrders)
//   @JoinColumn({ name: 'order_id' })
//   order: Order;

//   @Column()
//   quantity: number

//   @Column()
//   sum: number
// }