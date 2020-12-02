import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';
import { PetShopProductCatagoriesComponent } from './pet-shop-product-catagories/pet-shop-product-catagories.component';

@NgModule({
  declarations: [
    AppComponent,
    PetShopStoreFrontComponent,
    PetShopProductCatagoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, PetShopStoreFrontComponent]
})
export class AppModule { }
