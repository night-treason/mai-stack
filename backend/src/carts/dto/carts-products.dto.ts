import { Transform } from 'class-transformer';
import { Cart } from '../entities/cart.entity';
import { Product } from 'src/products/entities/product.entity';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CartProductDTO {
  @IsNotEmpty()
  cart: number;

  @IsNotEmpty()
  product: number;

  @Transform(({ value }) => Number(value))
  quantity: number;
}

export class CartProductResDTO {
  @IsInt()
  id: number;

  @IsInt()
  quantity: number;

  @IsNotEmpty()
  product: Product;

  // @IsString()
  // name: string;

  // @IsString()
  // color: string;

  // @IsInt()
  // @Min(0)
  // weight: number;

  // @IsInt()
  // @Min(0)
  // width: number;

  // @IsInt()
  // @Min(0)
  // height: number;

  // @IsInt()
  // @Min(0)
  // depth: number;

  // @IsInt()
  // @Min(0)
  // price: number;
}
