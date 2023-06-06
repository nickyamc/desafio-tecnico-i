import { newIdOrder } from "../store";
import { Basket } from "./basket.entity";

export class Order {
    id: number;
    basket: Basket;

    constructor(basket: Basket) {
        this.id = newIdOrder();
        this.basket = basket;
    }
}