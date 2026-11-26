import { IProduct } from "../../types";

export class Catalog {
  private _products: IProduct[] = [];
  private _selectedProduct: IProduct | null = null;

  set products(products: IProduct[]) {
    this._products = products;
  }

  get products(): IProduct[]{
    return this._products;
  }

  getProductById(id: string): IProduct | undefined {
    const hasItem = this._products.find(item => item.id === id);
    return hasItem;
  }

  set selectedProduct(product: IProduct) {
    this._selectedProduct = product;
  }

  get selectedProduct(): IProduct | null {
    return this._selectedProduct;
  }
}