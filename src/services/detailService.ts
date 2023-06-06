import detailsData from "../store/details.json";
import { ProductInventory } from "../entities/ProductInventory.entity";

const details: ProductInventory[] = detailsData as ProductInventory[];

export const findAll = (): ProductInventory[] => {
  return details;
};
