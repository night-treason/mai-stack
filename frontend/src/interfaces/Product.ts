export interface Product {
    id: number
    name: string
    color: string
    weight: number
    width: number
    height: number
    depth: number
    price: number
}

export interface CartProduct {
    id: number
    product: Product
    quantity: number
}