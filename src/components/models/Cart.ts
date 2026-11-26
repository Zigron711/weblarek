import { IProduct } from "../../types";

export class Cart {
  private _items: IProduct[] = [];

  addItem(product: IProduct) {
    this._items.push(product);
  }

  get items(): IProduct[] {
    return this._items;
  }

  removeItem(product: IProduct): void {
    const index = this._items.findIndex(item => item.id === product.id);
    if(index !== -1) {
      this._items.splice(index, 1);
    }else {
      console.log(`Товара ${product.title} нет в корзине`)
    }
  }

  getPrice(): number {
    const price = this._items.reduce((acc, item) => {
      if(item.price === null) {
        return acc + 0;
      }else {
        return acc + item.price;
      }
    }, 0)
    return price;
  }

  getCount(): number {
    const count = this._items.length;
    return count;
  }

  hasItem(id: string): boolean {
    const hasIndex = this._items.some(item => item.id === id);
    return hasIndex;
  }

  clearCart(): void {
    this._items = [];
  }
}