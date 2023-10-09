import { Controller, Get, Post, Body, Patch, Param, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { Response } from 'express';
import { CartProduct } from 'src/carts/entities/carts-products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const products = await this.productsService.findAll();
    return res.status(200).json({results: products})
  }

  @Post('add')
  create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() newData: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(id, newData);
  }

  // @Get('cart/:cartId')
  // getCartItems(@Param('cartId') cartId: string): Promise<CartProduct[]> {
  //   return this.productsService.getCartItems(cartId);
  // }
}
