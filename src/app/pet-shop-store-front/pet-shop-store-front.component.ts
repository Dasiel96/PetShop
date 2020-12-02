import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-shop-store-front',
  templateUrl: './pet-shop-store-front.component.html',
  styleUrls: ['./pet-shop-store-front.component.scss']
})
export class PetShopStoreFrontComponent implements OnInit {

  @Input() name: string[]=[];
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
