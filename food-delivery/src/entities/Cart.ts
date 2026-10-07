import type { Position } from './Position';

export class Cart {
  constructor(
    public readonly id: number,
    public readonly createdAt: Date,
    private _positions: Position[] = [],
  ) {}

  get positions(): Position[] {
    return [...this._positions];
  }

  get totalSum(): number {
    return this._positions.reduce((sum, p) => sum + p.calcCost(), 0);
  }

  addPosition(position: Position): void {
    this._positions.push(position);
  }

  removePosition(id: number): void {
    this._positions = this._positions.filter(p => p.id !== id);
  }
}