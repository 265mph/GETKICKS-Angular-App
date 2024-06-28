import { Component, OnInit } from '@angular/core';
import { ProductInfo } from './products.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: ProductInfo[] = [ ];

  constructor(private productService: ProductService) {};

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {
        this.products = res
      }
    )
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      res => {
        this.products = res
      }
    )
  }

  toggleActions(product: ProductInfo) {
    product.added = !product.added

    if(product.added) {
      this.productService.addToCart(product, product.id).subscribe(
        res => {
          console.log(res)
        }
      )
    }
  }
}
