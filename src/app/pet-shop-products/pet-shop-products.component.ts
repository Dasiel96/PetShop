import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-products',
  templateUrl: './pet-shop-products.component.html',
  styleUrls: ['./pet-shop-products.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopProductsComponent implements OnInit {

  @Input() product_objs_list: Product[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
