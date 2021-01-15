import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  cartList = []

  addItem(item): void {
    this.cartList.push(item);
  }

  getItems() {
    return this.cartList;
  }

  delItem(item): void {
    const index = this.cartList.indexOf(item);
    if (index > -1) {
      this.cartList.splice(index, 1);
    }
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}