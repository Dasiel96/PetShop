import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';

@NgModule({
  declarations: [
    AppComponent,
    PetShopStoreFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
