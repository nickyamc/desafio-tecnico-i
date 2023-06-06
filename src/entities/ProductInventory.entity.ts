import { Inventory } from "./inventory.entity";
import { Product } from "./product.entity";

export class ProductInventory {
  id: number;
  product: Product;
  inventory: Inventory;
  quantityA: number;
  quantityR: number;

  constructor(
    id: number,
    product: Product,
    inventory: Inventory,
    quantityA: number,
    quantityR: number
  ) {
    this.id = id;
    this.product = product;
    this.inventory = inventory;
    this.quantityA = quantityA;
    this.quantityR = quantityR;
  }
}
