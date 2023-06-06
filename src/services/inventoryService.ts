import { Inventory } from "../entities/inventory.entity";
import inventoryData from "../store/inventories.json";

const inventories: Inventory[] = inventoryData;

export const findById = (id: number): Inventory => {
    const inventory = inventories.find((value) => value.id == id)
    if (inventory) return inventory;
    throw new Error("No existe el Inventario/bodega")
}