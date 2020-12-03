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
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
