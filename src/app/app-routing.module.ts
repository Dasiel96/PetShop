import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetShopAnimalsBirdsComponent } from './pet-shop-animals-birds/pet-shop-animals-birds.component';
import { PetShopAnimalsSuppliesComponent } from './pet-shop-animals-supplies/pet-shop-animals-supplies.component';
import { PetShopAnimalsComponent } from './pet-shop-animals/pet-shop-animals.component';
import { PetShopPlantSuppliesComponent } from './pet-shop-plant-supplies/pet-shop-plant-supplies.component';
import { PetShopPlantsComponent } from './pet-shop-plants/pet-shop-plants.component';
import { PetShopProductCatagoriesComponent } from './pet-shop-product-catagories/pet-shop-product-catagories.component';
import { PetShopProductInfoComponent } from './pet-shop-product-info/pet-shop-product-info.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';
const url_name = "pet-shop"

const routes: Routes = [
  {
    path: `${url_name}-animals-catagory/birds`,
    component: PetShopAnimalsBirdsComponent
  },
  {
    path: `${url_name}-animals-catagory`,
    component: PetShopAnimalsComponent
  },
  {
    path: `${url_name}-animals-supplies-catagory`,
    component: PetShopAnimalsSuppliesComponent
  },
  {
    path: `${url_name}-plants-catagory`,
    component: PetShopPlantsComponent
  },
  {
    path: `${url_name}-plants-supplies-catagory`,
    component: PetShopPlantSuppliesComponent
  },
  {
    path: `${url_name}-home`,
    component: PetShopStoreFrontComponent
  },
  {
    path: `${url_name}-product-info`,
    component: PetShopProductInfoComponent
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
