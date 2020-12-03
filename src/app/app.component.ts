import { Component } from '@angular/core';
import { Router } from '@angular/router';


export interface Product {
  name: string,
  imgUrl: string,
  price: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetShop';
  private startup = true
}
