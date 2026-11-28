import { IBuyer, TPayment } from "../../types";

export class Customer {
  private payment: TPayment = '';
  private address: string = '';
  private email: string = '';
  private phone: string = '';

  validator(): Record<string, string> {
    const errors: Record<string, string> = {};

    if(!this.payment) {
      errors.payment = 'Укажите способ оплаты'
    }
    if(!this.address) {
      errors.address = 'Укажите адрес'
    }
    if(!this.email) {
      errors.email = 'Укажите email'
    }
    if(!this.phone) {
      errors.phone = 'Укажите номер телефона'
    }
    return errors;
  }

  setInfo(data: Partial<IBuyer>): void {
    if(data.payment !== undefined) {
      this.payment = data.payment;
    }if(data.address !== undefined) {
      this.address = data.address;
    }if(data.email !== undefined) {
      this.email = data.email;
    }if(data.phone !== undefined) {
      this.phone = data.phone;
    }
  }

  getInfo(): IBuyer {
    return {payment: this.payment, address: this.address, email: this.email, phone: this.phone}
  }

  clearInfo(): void {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }
}