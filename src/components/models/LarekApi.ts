import { IOrder, IOrderResponse, IProductResponse } from "../../types";
import { Api } from "../base/Api";

export class LarekApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  getProduct(): Promise<IProductResponse> {
    return this.api.get<IProductResponse>('/product/');
  }

  postOrder(order: IOrder): Promise<IOrderResponse> {
    return this.api.post<IOrderResponse>('/order/', order);
  }
}