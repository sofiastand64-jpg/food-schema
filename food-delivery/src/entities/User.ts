import type { Cart } from './Cart';
import type { Order } from './Order';

export class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly phone: string,
    public readonly email: string,
    private _cart: Cart,
    private _orders: Order[] = [],
  ) {}

  get cart(): Cart {
    return this._cart;
  }

  get orders(): Order[] {
    return [...this._orders];
  }

  addOrder(order: Order): void {
    this._orders.push(order);
  }
}