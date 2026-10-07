import type { Position } from './Position';

export class Order {
  constructor(
    public readonly id: number,
    public readonly date: Date,
    private _status: string,
    public readonly totalSum: number,
    public readonly userId: number,
    private _positions: Position[],
  ) {}

  get status(): string {
    return this._status;
  }

  get positions(): Position[] {
    return [...this._positions];
  }

  cancel(): void {
    this._status = 'cancelled';
  }

  updateStatus(newStatus: string): void {
    this._status = newStatus;
  }
}