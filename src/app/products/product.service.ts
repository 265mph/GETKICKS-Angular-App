import { Injectable } from '@angular/core';
import { ProductInfo } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsChanged = new Subject<ProductInfo[]>()
  cartChanged = new Subject<ProductInfo[]>()

  products: ProductInfo[] = [
    {
      id: "1",
      name: "Nike Dunk High Retro",
      price: "$195.00",
      image: "../assets/img/collection-7.png",
      added: false
    },

    {
      id: "2",
      name: "Nike City Rep",
      price: "$200.00",
      image: "../assets/img/collection-3.png",
      added: false
    },

    {
      id: "3",
      name: "Nike Air Max Pulse",
      price: "$84.00",
      image: "../assets/img/collection-2.png",
      added: false
    },

    {
      id: "4",
      name: "Nike Pegasus FlyEase",
      price: "$60.00",
      image: "../assets/img/collection-9.png",
      added: false
    }
  ];

  cart: ProductInfo[] = [

  ]

  constructor() { }

  getProducts(): Observable<ProductInfo[]> {
    return of(this.products.slice())
  }
  
  getCart(): Observable<ProductInfo[]> {
    return of(this.cart.slice())
  }

  addToCart(product: ProductInfo, id: string): Observable<boolean> {
    const index = this.products.findIndex(product => product.id === id)

    if (index != 1) {
      this.cart.push(product)
    }

    return of(true)
  }
}
