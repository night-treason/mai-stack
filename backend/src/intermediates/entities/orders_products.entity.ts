// import { Order } from "src/orders/entities/order.entity";
// import { Product } from "src/products/entities/product.entity";
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

// @Entity('order_products')
// export class OrderProduct {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Order, order => order.orderProducts)
//   @JoinColumn({ name: 'order_id' })
//   order: Order;

//   @ManyToOne(() => Product, product => product.orderProducts)
//   @JoinColumn({ name: 'product_id' })
//   product: Product;
  
//   @Column()
//   quantity: number; 
// }