import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-plant-supplies',
  templateUrl: './pet-shop-plant-supplies.component.html',
  styleUrls: ['./pet-shop-plant-supplies.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopPlantSuppliesComponent implements OnInit {


  product_objs_list: Product[] = [
    {
      name: "plant soil", 
      imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-soil.jpg", 
      price: ""
    },
    {
      name: "plant fertilizer", 
      imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-fert.jpg", 
      price: ""
    },
    {
      name: "plant lights", 
      imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-light.jpeg", 
      price: ""
    },
    {
      name: "plant tools", 
      imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-tools.jpg", 
      price: ""
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
