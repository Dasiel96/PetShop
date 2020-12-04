import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-plants',
  templateUrl: './pet-shop-plants.component.html',
  styleUrls: ['./pet-shop-plants.component.scss'],
  host: {
    class: 'col-12-span'
  }
})
export class PetShopPlantsComponent implements OnInit {

  product_objs_list: Product[] = [
    {
      name: "aquatic plants", 
      imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-aquatic-plants-sm.jpg", 
      price: "",
      link: ""
    },
    {
      name: "terrestrial plants", 
      imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-terrestrial-plants.jpg", 
      price: "",
      link: ""
    },
    {
      name: "low light plants", 
      imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-low-light-plants-sm.jpg", 
      price: "",
      link: ""
    },
    {
      name: "high light plants", 
      imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-high-light-plants.jpg", 
      price: "",
      link: ""
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
