import type { Dish } from './Dish';

export class Menu {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly updatedAt: Date,
    private _dishes: Dish[] = [],
  ) {}

  get dishes(): Dish[] {
    return [...this._dishes];
  }

  addDish(dish: Dish): void {
    this._dishes.push(dish);
  }
}