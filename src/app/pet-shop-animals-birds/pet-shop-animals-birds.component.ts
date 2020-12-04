import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals-birds',
  templateUrl: './pet-shop-animals-birds.component.html',
  styleUrls: ['../pet-shop-products/pet-shop-products.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopAnimalsBirdsComponent implements OnInit {

  product_objs_list: Product[] = [
    {
      name: "cockatiel",
      imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-bird-catagories.jpg",
      price: "$5.00",
      link: "",
      des: "it is a noisy bird that loves to play"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
