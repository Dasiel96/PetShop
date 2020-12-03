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
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
