import { CartProduct } from "./Product"

export interface Order {
    id: number
    status: string
    total_sum: number
    total_amount: number
    products: CartProduct[]
}