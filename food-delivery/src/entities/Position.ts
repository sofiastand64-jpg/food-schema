import type { Dish } from './Dish';

export class Position {
  constructor(
    public readonly id: number,
    public readonly dish: Dish,
    private _quantity: number,
  ) {
    if (_quantity <= 0) throw new Error('Quantity must be positive');
  }

  get quantity(): number {
    return this._quantity;
  }

  changeQuantity(q: number): void {
    if (q <= 0) throw new Error('Quantity must be positive');
    this._quantity = q;
  }

  calcCost(): number {
    return this.dish.price * this._quantity;
  }
}