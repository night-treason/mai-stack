import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";
import { OrderProduct } from "src/intermediates/entities/orders-products.entity";
import { Product } from "src/products/entities/product.entity";

export class OrderProductDTO {
    @IsNotEmpty()
    product: Product;

    @IsInt()
    quantity: number;
}

export class OrderResDTO {
    @IsInt()
    id: number;
  
    @IsString()
    status: string;
  
    @IsInt()
    total_sum: number;
  
    @IsInt()
    total_amount: number;

    @IsNotEmpty()
    products: OrderProductDTO[];
}