import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post('add')
  create(@Body() product: Product): Promise<Product>{
    return this.productsService.create(product)
  }

  @Patch(':id')
  update(
  @Param('id') id: number,
  @Body() newData: Partial<Product>): Promise<Product>{
    return this.productsService.update(id, newData)
  }

}
