import { DataSource } from 'typeorm';
import { CartProduct } from 'src/carts/entities/carts-products.entity';
import { Product } from 'src/products/entities/product.entity';

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
