import { Customer } from "../entities/customer.entity";
import customerData from "../store/customers.json";
import { CustomerEntry } from "../types";

const customers: Customer[] = customerData as Customer[];

export const create = (customer: CustomerEntry): string => {
  if (String(customer.dni).length != 8) return "DNI must contain 8 digits";
  if (!customers.some((value) => value.dni === customer.dni)) {
    customers.push(customer);
    return "Client created";
  }
  return "DNI already exists";
};

export const findAll = (): Customer[] => {
  return customers;
};

export const findByDni = (dni: number) => {
  const customer = customers.find((value) => value.dni === dni);
  if (customer) return customer;
  throw new Error("No existe el cliente");
};
