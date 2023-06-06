import { Product } from "../entities/product.entity";
import productData from "../store/products.json"

const products: Product[] = productData;

export const findById = (id: number): Product => {
    const product = products.find((value) => value.id == id);
    if(product) return product;
    throw new Error("")
}