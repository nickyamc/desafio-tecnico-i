import basketData from "../store/basket.json";
import detailsData from "../store/details.json";
import { BasketEntry } from "../types";
import { ProductInventory } from "../entities/ProductInventory.entity";
import { Basket, ProductB } from "../entities/basket.entity";

import * as customerService from "./customerService";
import * as productService from "./productService";
import * as inventoryService from "./inventoryService";

const baskets: Basket[] = basketData as Basket[];
const details: ProductInventory[] = detailsData as ProductInventory[];

export const create = (basket: BasketEntry) => {
  const detailsInv = details.filter(
    (value) => value.inventory.id === basket.inventoryId
  );

  const customer = customerService.findByDni(basket.customerDni);
  const products: ProductB[] = [];
  const inventory = inventoryService.findById(basket.inventoryId);

  basket.products.forEach((element) => {
    const detail = detailsInv.find((value) => value.product.id == element.id);
    const product = productService.findById(element.id);
    if (!detail) {
      if (!product)
        throw new Error(`El producto no existe => id: ${element.id}`);
      throw new Error(
        `${inventory.name} no tiene disponible el producto: ${product.name}`
      );
    }
    if (detail.quantityA - detail.quantityR >= element.quantity) {
      detail.quantityA -= element.quantity;
      detail.quantityR = element.quantity;
    } else {
      throw new Error(
        `El producto ${detail.product.name} no tiene suficiente stock.`
      );
    }
    products.push(new ProductB(product.id, product.name, product.price, element.quantity));
  });
  const newBasket = new Basket(customer, products, inventory);
  baskets.push(newBasket);
  return basket;
};

export const findAll = (): Basket[] => {
  return baskets;
};

export const findById = (id: number): Basket => {
  const basket = baskets.find((value) => value.id == id);
  if (basket) return basket;
  throw new Error("No existe el carrito");
};
