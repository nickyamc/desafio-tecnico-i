import { newIdBasket } from "../store";
import { Customer } from "./customer.entity";
import { Inventory } from "./inventory.entity";
import { Product } from "./product.entity";

export class ProductB extends Product {
    quantity: number;
    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }
}

export class Basket {
    id: number;
    customer: Customer;
    products: ProductB[];
    inventory: Inventory;

    constructor(customer: Customer, products: ProductB[], inventory: Inventory) {
        this.id = newIdBasket();
        this.customer = customer;
        this.products = products;
        this.inventory = inventory;
    }
}