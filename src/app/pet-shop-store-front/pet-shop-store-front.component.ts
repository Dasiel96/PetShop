import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-shop-store-front',
  templateUrl: './pet-shop-store-front.component.html',
  styleUrls: ['./pet-shop-store-front.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopStoreFrontComponent implements OnInit {

  @Input() name: string[]=[];
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
