

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductData } from '../product-data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[ {
    "id": 1,
    "model": "Gt2000",
    "title":"name 1",
    "modelName": "Gt2000",
    "ModelType": "Hello1",
    "image":"../../assets/images/item1.png"

},
{
  "id": 2,
  "title":"name 2",
  "model": "Gt2000",
  "modelName": "Gt2000",
  "ModelType": "Hello1",
  "image":"../../assets/images/item2.png"

},
{
  "id": 3,
  "title":"name 3",
  "model": "Gt2000",

  "modelName": "Gt2000",
  "ModelType": "Hello1",
  "image":"../../assets/images/item3.png"

},
{
  "id": 4,
  "model": "Gt2000",
  "title":"name 4",
  "modelName": "Gt2000",
  "ModelType": "Hello1",
  "image":"../../assets/images/item4.png"

}
]
  constructor(private router: Router) { }
allproducts:ProductData[]=this.products ;
details(){
  this.router.navigate(['/product']);
}
  ngOnInit(): void {
  }

}
