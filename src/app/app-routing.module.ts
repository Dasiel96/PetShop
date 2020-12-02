import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetShopProductCatagoriesComponent } from './pet-shop-product-catagories/pet-shop-product-catagories.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';
const url_name = "pet-shop"

const routes: Routes = [
  {
    path: `${url_name}-animals`,
    component: PetShopProductCatagoriesComponent
  },
  {
    path: "pet-shop-home",
    component: PetShopStoreFrontComponent
  },
  {
    path: "",
    component: PetShopStoreFrontComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
