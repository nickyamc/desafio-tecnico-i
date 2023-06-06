import orderData from "../store/order.json";
import detailsData from "../store/details.json";
import { ProductInventory } from "../entities/ProductInventory.entity";
import { Order } from "../entities/order.entity";
import * as basketService from "./basketService";

const orders: Order[] = orderData as Order[];
const details: ProductInventory[] = detailsData as ProductInventory[];

export const create = (basketId: number) => {
  const basket = basketService.findById(basketId);
  basket.products.forEach((element) => {
    const detail = details.find(
      (value) => value.product.id == element.id && value.inventory.id == basket.inventory.id
    );
    if (detail) detail.quantityR -= element.quantity;
  });
  const newOrder = new Order(basket);
  return newOrder;
};

export const findAll = (): Order[] => {
  return orders;
};
