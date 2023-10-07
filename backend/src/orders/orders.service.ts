// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Order } from './entities/order.entity';

// // @Injectable()
// // export class ProductsService {
// //   constructor(
// //     @InjectRepository(Product)
// //     private productsRepository: Repository<Product>,
// //   ) {}

// //   findAll(): Promise<Product[]> {
// //     return this.productsRepository.find();
// //   }

// //   create(product: Product): Promise<Product> {
// //     return this.productsRepository.save(product);
// //   }

// //   async update(id: number, newData: Partial<Product>): Promise<Product> {
// //     // const row = await this.productsRepository.findOne(id);

// //     // if (!row) {
// //     //   throw new Error('Row not found.');
// //     // }

// //     // await this.productsRepository.update(id, newData);
// //     // return this.productsRepository.findOne(id);
// //     const row = await this.productsRepository
// //       .createQueryBuilder()
// //       .update(Product)
// //       .returning('*')
// //       .set(newData)
// //       .where('products.id = :id', { id })
// //       .execute()
// //       .then((res) => {
// //         return res.raw[0];
// //       });

// //     return row;
// //   }
// // }
