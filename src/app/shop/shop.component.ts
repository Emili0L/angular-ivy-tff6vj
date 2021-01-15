import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from  "../products";



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = products;
  constructor(
   private cartSertvice: CartService,
    
  ) { }

  ngOnInit() {
  }

  addToCart(product) {
    this.cartSertvice.addItem(product);
    window.alert("Produkt wurde zum Warenkorb hinzugefügt")
  }
  
}