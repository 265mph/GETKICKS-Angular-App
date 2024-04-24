import { Component } from '@angular/core';
import { ProductInfo } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: ProductInfo[] = [
    new ProductInfo ('Nike Dunk High Retro', '$195.00', '../assets/img/collection-7.png', false),
    new ProductInfo ('Nike City Rep', '$200.00', '../assets/img/collection-3.png', false),
    new ProductInfo ('Nike Air Max Pulse', '$84.00', '../assets/img/collection-2.png', false),
    new ProductInfo ('Nike Pegasus FlyEase', '$60.00', '../assets/img/collection-9.png', false)
  ];

  toggleHeart(product: ProductInfo) {
    product.isHeartClicked = !product.isHeartClicked;
  }
}
