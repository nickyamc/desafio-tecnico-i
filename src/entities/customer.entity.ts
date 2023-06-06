export class Customer {
  dni: number;
  firstName: string;
  lastName: string;

  constructor(dni: number, firstName: string, lastName: string) {
    this.dni = dni;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
