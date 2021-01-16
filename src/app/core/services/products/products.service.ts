import { Injectable } from '@angular/core';

import { Product } from '../../../Products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/imagen1.png',
      title: 'glasses',
      price: 20,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/imagen2.png',
      title: 'glasses',
      price: 25,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/imagen3.png',
      title: 'glasses',
      price: 10,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/imagen4.png',
      title: 'glasses',
      price: 15,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/imagen5.png',
      title: 'glasses',
      price: 12,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/imagen6.png',
      title: 'glasses',
      price: 25,
      description: 'bla bla bla bla bla',
    },
    {
      id: '1',
      image: 'assets/images/imagen1.png',
      title: 'glasses',
      price: 15,
      description: 'bla bla bla bla bla',
    },
    {
      id: '7',
      image: 'assets/images/imagen7.png',
      title: 'glasses',
      price: 12,
      description: 'bla bla bla bla bla',
    },
    {
      id: '8',
      image: 'assets/images/imagen8.png',
      title: 'glasses',
      price: 11,
      description: 'bla bla bla bla bla',
    },
    {
      id: '9',
      image: 'assets/images/imagen9.png',
      title: 'glasses',
      price: 10,
      description: 'bla bla bla bla bla',
    },
    {
      id: '10',
      image: 'assets/images/imagen10.png',
      title: 'glasses',
      price: 25,
      description: 'bla bla bla bla bla',
    },
    {
      id: '11',
      image: 'assets/images/imagen11.png',
      title: 'glasses',
      price: 15,
      description: 'bla bla bla bla bla',
    },
    {
      id: '12',
      image: 'assets/images/imagen12.png',
      title: 'glasses',
      price: 20,
      description: 'bla bla bla bla bla',
    },
    {
      id: '13',
      image: 'assets/images/imagen13.png',
      title: 'glasses',
      price: 16,
      description: 'bla bla bla bla bla',
    },
    {
      id: '14',
      image: 'assets/images/imagen14.png',
      title: 'glasses',
      price: 15,
      description: 'bla bla bla bla bla',
    },
    {
      id: '15',
      image: 'assets/images/imagen15.png',
      title: 'glasses',
      price: 10,
      description: 'bla bla bla bla bla',
    },
    {
      id: '16',
      image: 'assets/images/imagen16.png',
      title: 'glasses',
      price: 20,
      description: 'bla bla bla bla bla',
    },
    {
      id: '17',
      image: 'assets/images/imagen17.png',
      title: 'glasses',
      price: 17,
      description: 'bla bla bla bla bla',
    },
    {
      id: '18',
      image: 'assets/images/imagen18.png',
      title: 'glasses',
      price: 16,
      description: 'bla bla bla bla bla',
    },
    {
      id: '19',
      image: 'assets/images/imagen19.png',
      title: 'glasses',
      price: 14,
      description: 'bla bla bla bla bla',
    },
    {
      id: '20',
      image: 'assets/images/imagen20.png',
      title: 'glasses',
      price: 12,
      description: 'bla bla bla bla bla',
    },
    {
      id: '21',
      image: 'assets/images/imagen21.png',
      title: 'glasses',
      price: 10,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((item) => id === item.id);
  }
}
