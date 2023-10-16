import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { CartProduct } from 'src/intermediates/entities/carts-products.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CART_PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CartProduct),
    inject: ['DATA_SOURCE'],
  },
];
