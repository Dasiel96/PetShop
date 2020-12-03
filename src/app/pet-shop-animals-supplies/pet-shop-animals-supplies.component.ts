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
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
