import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "rezepte", component: RezepteComponent },
    { path: "shop", component: ShopComponent },
    { path: "cart", component: CartComponent },
  ]) ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, NavigatorComponent, HomeComponent, RezepteComponent, BottomBarComponent, ShopComponent, CartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
