const Ids = {
  customers: 1,
  orders: 0,
  products: 3,
  details: 0,
  inventories: 2,
  basket: 0,
}

export const newIdCustomer = () => {
  Ids.customers++;
  return Ids.customers;
}
export const newIdBasket = () => {
  Ids.basket++;
  return Ids.basket;
}

export const newIdOrder = () => {
  Ids.orders++;
  return Ids.orders;
}
