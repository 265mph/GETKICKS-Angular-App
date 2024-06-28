import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { ProductInfo } from '../products/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ProductInfo[] = [  ]

  constructor(private productService: ProductService) {  }


  ngOnInit(): void {
    this.productService.getCart().subscribe(
      res => {
        this.cart = res;
        console.log(this.cart)
      }
    )
  }
}
