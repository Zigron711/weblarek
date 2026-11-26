import { TPayment } from "../../types";

export class Customer {
  private payment: TPayment = '';
  private address: string = '';
  private email: string = '';
  private phone: string = '';

  validator(name: string): {isValid: boolean, error?: string} {
    const item = (this as any)[name];

    if(!item || item === '') {
      return {isValid: false, error: `Поле ${name} не заполнено`}
    }else{
      return {isValid: true}
    }
  } 

  setInfo(payment?: TPayment, address?: string, email?: string, phone?: string): void {
    if(payment !== undefined) {
      this.payment = payment;
    }if(address !== undefined) {
      this.address = address;
    }if(email !== undefined) {
      this.email = email;
    }if(phone !== undefined) {
      this.phone = phone;
    }
  }

  getInfo(): {payment: string, adress: string, email: string, phone: string} {
    return {payment: this.payment, adress: this.address, email: this.email, phone: this.phone}
  }

  clearInfo(): void {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }
}