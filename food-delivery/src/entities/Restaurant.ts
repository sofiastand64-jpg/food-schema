import type { Menu } from './Menu';

export class Restaurant {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly address: string,
    public readonly rating: number,
    private _menu: Menu,
  ) {}

  get menu(): Menu {
    return this._menu;
  }
}