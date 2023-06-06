import { Customer } from "./entities/customer.entity";
import { Inventory } from "./entities/inventory.entity";

export interface ProductEntry {
  id: number;
  quantity: number
}

export interface CustomerEntry {
  dni: number;
  firstName: string;
  lastName: string;
}

export interface BasketEntry {
  id: number;
  customerDni: number;
  products: ProductEntry[];
  inventoryId: number;
}

export interface OrderEntry {
  basketId: number;
}