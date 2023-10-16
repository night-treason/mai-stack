import { Controller, Get, Post, Body, Patch, Param, Res, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CartProduct } from 'src/intermediates/entities/carts-products.entity';
import { CartsService } from './carts.service';
import { Response } from 'express';
import { CartProductDTO, CartProductResDTO } from './dto/carts-products.dto';
import { plainToClass } from 'class-transformer';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('/products')
  @UsePipes(new ValidationPipe({ transform: true }))
  addProductToCart(@Body() cartProductDTO: CartProductDTO): Promise<CartProduct> {
    // const cartProduct = new CartProduct();
    // cartProduct.cart = cartProductDTO.cart;
    // cartProduct.product = cartProductDTO.product;
    // cartProduct.quantity = cartProductDTO.quantity;

    // console.log(cartProduct.product);

    return this.cartsService.addProductToCart(cartProductDTO);
  }

  @Delete('/products/:id')
  async removeProductFromCart(@Param('id') productId: string, @Res() res: Response): Promise<Response> {
    await this.cartsService.removeProductFromCart(productId);
    return res.status(200).json({message: "Successfully deleted"})
  }

  @Get()
  getCartItems(): Promise<CartProductResDTO[]> {
    return this.cartsService.getCartItems();
  }
}
