import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals-supplies',
  templateUrl: './pet-shop-animals-supplies.component.html',
  styleUrls: ['./pet-shop-animals-supplies.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsSuppliesComponent implements OnInit {

  product_objs_list: Product[] = [
    {
      name: "mammal supplies", 
      imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-mammal-supplies.jpg", 
      price: ""
    },
    {
      name: "fish supplies", 
      imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-fish-supplies.jpg", 
      price: ""
    },
    {
      name: "reptile supplies", 
      imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-reptile-supplies.jpg", 
      price: ""
    },
    {
      name: "bird supplies", 
      imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-bird-supplies.jpg", 
      price: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
