import type { IDeliverable } from '../interfaces/IDeliverable';

export class Courier implements IDeliverable {
  private _status = 'free';

  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly phone: string,
  ) {}

  get status(): string {
    return this._status;
  }

  acceptOrder(): void {
    this._status = 'delivering';
  }

  deliver(): void {
    this._status = 'free';
  }
}