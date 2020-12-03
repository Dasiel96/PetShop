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
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
    {name: "", imgUrl: "", price: ""},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
