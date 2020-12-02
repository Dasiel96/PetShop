import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-shop-product-catagories',
  templateUrl: './pet-shop-product-catagories.component.html',
  styleUrls: ['./pet-shop-product-catagories.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopProductCatagoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
