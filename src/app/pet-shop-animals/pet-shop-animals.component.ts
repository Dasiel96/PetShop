import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals',
  templateUrl: './pet-shop-animals.component.html',
  styleUrls: ['./pet-shop-animals.component.scss'],
  host: {
    class: "col-12-span"
  }
})

export class PetShopAnimalsComponent implements OnInit {

  product_objs_list: Product[] = [
    { 
      name: "mammals", 
      imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-mammal-catagory.jpg", 
      price: "" ,
      link: ""
    },
    { 
      name: "fish", 
      imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-fish-catagories.jpg", 
      price: "",
      link: ""
    },
    { 
      name: "reptiles", 
      imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-reptile-catagories.jpg", 
      price: "",
      link: ""
    },
    { 
      name: "birds", 
      imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-bird-catagories.jpg", 
      price: "",
      link: "/pet-shop-animals-catagory/birds" 
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
