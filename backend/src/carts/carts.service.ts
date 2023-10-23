// carts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartProduct } from '../intermediates/entities/carts-products.entity';
import { CartProductDTO, CartProductResDTO } from './dto/carts-products.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartProduct)
    private cartsProductsRepository: Repository<CartProduct>,
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  getCartItems(): Promise<CartProductResDTO[]> {
    const testCartId = 1;
    return this.cartsProductsRepository.find({ 
      where: { 
        cart: { id: testCartId } 
      },
      relations: ['product']
    });
  }

  async addProductToCart(CartProduct: Partial<CartProductDTO>) {
    const cart = await this.cartsRepository.findOneBy({ id: CartProduct.cart });
    const product = await this.productsRepository.findOneBy({ id: CartProduct.product });

    if (!cart || !product) {
      throw new Error('Cart or Product not found.');
    }

    let cartProduct = await this.cartsProductsRepository.findOneBy({
      cart: cart,
      product: product,
    });

    if (cartProduct) {
      cartProduct.quantity += CartProduct.quantity;
      if (cartProduct.quantity <= 0) {
        await this.cartsProductsRepository.remove(cartProduct);
        return;
      }
    } else {
      cartProduct = this.cartsProductsRepository.create({
        cart,
        product,
        quantity: CartProduct.quantity,
      });
    }

    await this.cartsProductsRepository.save(cartProduct);
    return cartProduct;
  }

  async removeProductFromCart(productId: string) {
    const testCartId = 1;

    const cart = await this.cartsRepository.findOne({ where: {id: testCartId} });
    const product = await this.productsRepository.findOne({ where: {id: Number(productId)} });

    const cartProduct = await this.cartsProductsRepository.findOne({
      where: { cart, product },
    });

    if (!cartProduct) {
      throw new Error('Product not found in cart');
    }

    await this.cartsProductsRepository.remove(cartProduct);
  }
}
