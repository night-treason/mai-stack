import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

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
}
